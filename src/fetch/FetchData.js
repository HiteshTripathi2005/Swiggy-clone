const CLOUDFLARE_WORKER_URL =
  "https://swiggy-proxy.tripathihitesh580.workers.dev";

export const FetchData = async () => {
  try {
    // Get location from localStorage or use default place_id
    const loca = JSON.parse(localStorage.getItem("selectedLocation")) || {
      place_id: "ChIJwe1EZjDG5zsRaYxkjY_tpF0",
    };

    // Fetch the longitude and latitude using the place_id
    const logresponse = await fetch(
      `${CLOUDFLARE_WORKER_URL}/misc?place_id=${loca.place_id}`
    );

    const logresult = await logresponse.json();
    const { lng = 72.8856, lat = 19.0748 } =
      logresult.data[0]?.geometry.location || {};

    // Fetch restaurant data based on longitude and latitude
    const response = await fetch(
      `${CLOUDFLARE_WORKER_URL}/restaurants?lat=${lat}&lng=${lng}`
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    return null; // Handle error gracefully
  }
};

export const FetchMenu = async (id) => {
  try {
    // Reuse location logic from FetchData
    const loca = JSON.parse(localStorage.getItem("selectedLocation")) || {
      place_id: "ChIJS5QtSPnvNToRZQJKq4R-m5M",
    };

    // Fetch longitude and latitude using the place_id
    const logresponse = await fetch(
      `${CLOUDFLARE_WORKER_URL}/misc?place_id=${loca.place_id}`
    );

    const logresult = await logresponse.json();
    const { lng = 72.8856, lat = 19.0748 } =
      logresult.data[0]?.geometry.location || {};

    // Fetch menu data based on longitude, latitude, and restaurant id
    const data = await fetch(
      `${CLOUDFLARE_WORKER_URL}/menu?lat=${lat}&lng=${lng}&id=${id}`
    );

    const result = await data.json();
    return result;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    return null; // Handle error gracefully
  }
};
