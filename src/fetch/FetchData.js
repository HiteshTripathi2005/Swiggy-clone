export const FetchData = async () => {
  const loca = JSON.parse(localStorage.getItem("selectedLocation"));

  const latitude = loca ? loca.latitude : 19.0748;
  const longitude = loca ? loca.longitude : 72.8856;

  const response = await fetch(
    `https://swiggy-proxy.tripathihitesh580.workers.dev/restaurants?lat=${latitude}&lng=${longitude}`
  );

  const result = await response.json();
  return result;
};

export const FetchMenu = async (id) => {
  const loca = JSON.parse(localStorage.getItem("selectedLocation"));
  const latitude = loca ? loca.latitude : 19.0748;
  const longitude = loca ? loca.longitude : 72.8856;

  const data = await fetch(
    `https://swiggy-proxy.tripathihitesh580.workers.dev/menu?lat=${latitude}&lng=${longitude}&id=${id}`
  );
  const result = await data.json();
  return result;
};
