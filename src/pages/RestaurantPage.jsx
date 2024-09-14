import React, { useEffect, useState } from "react";
import { FetchMenu } from "../fetch/FetchData";
import RestaurantInfo from "../components/RestaurantPageComponents/RestaurantInfo/RestaurantInfo";
import { useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import Navbar from "../components/Common/Navbar/Navbar";
import Breadcrum from "../components/Common/breadcrum/Breadcrum";
import Deals from "../components/RestaurantPageComponents/Deals/Deals";
import CompleteMenu from "../components/RestaurantPageComponents/CompleteMenu/CompleteMenu";
import RecommendedFood from "../components/RestaurantPageComponents/recommended/RecommendedFood";

const RestaurantPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAllData = async (id) => {
      try {
        const result = await FetchMenu(id);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchAllData(id);
    }
  }, [id]);

  if (loading) return <LoadingPage />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navbar />
      <Breadcrum />
      <RestaurantInfo data={data} />
      <Deals data={data} />
      <RecommendedFood data={data} />
      <CompleteMenu data={data} />
    </div>
  );
};

export default RestaurantPage;
