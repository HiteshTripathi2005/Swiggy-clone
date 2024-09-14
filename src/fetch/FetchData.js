export const FetchData = async () => {
  // Retrieve and parse the selected location from local storage
  const loca = JSON.parse(localStorage.getItem("selectedLocation"));
  console.log(loca);

  // Default coordinates in case no location is selected
  const latitude = loca ? loca.latitude : 19.0748;
  const longitude = loca ? loca.longitude : 72.8856;

  // Fetch data using the latitude and longitude from the selected location
  const response = await fetch(
    `https://swiggy-proxy.tripathihitesh580.workers.dev/restaurants?lat=${latitude}&lng=${longitude}`
  );

  const result = await response.json();
  return result;
};

export const FetchMenu = async (id) => {
  const data = await fetch(
    `https://swiggy-proxy.tripathihitesh580.workers.dev/menu?id=${id}`
  );
  const result = await data.json();
  return result;
};
