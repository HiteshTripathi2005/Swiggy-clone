export const FetchData = async () => {
  const data = await fetch(
    "https://swiggy-proxy.tripathihitesh580.workers.dev/restaurants"
  );
  const result = await data.json();
  return result;
};

export const FetchMenu = async (id) => {
  const data = await fetch(
    `https://swiggy-proxy.tripathihitesh580.workers.dev/menu?id=${id}`
  );
  const result = await data.json();
  return result;
};
