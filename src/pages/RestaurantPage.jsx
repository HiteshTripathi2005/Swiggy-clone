import React, { useEffect, useState } from "react";
import { FetchMenu } from "../fetch/FetchData";
import RestaurantInfo from "../components/RestaurantPageComponents/RestaurantInfo/RestaurantInfo";
import { useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";

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
      <RestaurantInfo data={data} />
    </div>
  );
};

export default RestaurantPage;
