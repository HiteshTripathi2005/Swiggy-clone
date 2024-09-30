const CLOUDFLARE_WORKER_URL = import.meta.env.VITE_CLOUDFLARE_WORKER_URL;

export const FetchData = async () => {
  try {
    const loca = JSON.parse(localStorage.getItem("selectedLocation")) || {
      place_id: "ChIJwe1EZjDG5zsRaYxkjY_tpF0",
    };

    const logresponse = await fetch(
      `${CLOUDFLARE_WORKER_URL}/misc?place_id=${loca.place_id}`
    );

    const logresult = await logresponse.json();
    const { lng = 72.8856, lat = 19.0748 } =
      logresult.data[0]?.geometry.location || {};

    const response = await fetch(
      `${CLOUDFLARE_WORKER_URL}/restaurants?lat=${lat}&lng=${lng}`
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    return null;
  }
};

export const FetchMenu = async (id) => {
  try {
    const loca = JSON.parse(localStorage.getItem("selectedLocation")) || {
      place_id: "ChIJwe1EZjDG5zsRaYxkjY_tpF0",
    };

    const logresponse = await fetch(
      `${CLOUDFLARE_WORKER_URL}/misc?place_id=${loca.place_id}`
    );

    const logresult = await logresponse.json();
    const { lng = 72.8856, lat = 19.0748 } =
      logresult.data[0]?.geometry.location || {};

    const data = await fetch(
      `${CLOUDFLARE_WORKER_URL}/menu?lat=${lat}&lng=${lng}&id=${id}`
    );

    const result = await data.json();
    return result;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    return null;
  }
};
