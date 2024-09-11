import React, { useEffect, useState } from "react";
import { FetchData } from "../fetch/FetchData";
import FilterButtons from "../components/HomePageComponents/Groupbuttons/FilterButtons";
import DeliveryRes from "../components/HomePageComponents/DeliveryRes/DeliveryRes";
import Navbar from "../components/HomePageComponents/Navbar/Navbar";
import FoodType from "../components/HomePageComponents/Foodtype/FoodType";
import Restaurant from "../components/HomePageComponents/Restaurant/Restaurant";
import LoadingPage from "./LoadingPage";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const result = await FetchData();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) return <LoadingPage />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Navbar />
      <FoodType data={data} />
      <Restaurant data={data} />
      <FilterButtons data={data} />
      <DeliveryRes data={data} />
    </div>
  );
};

export default Home;
