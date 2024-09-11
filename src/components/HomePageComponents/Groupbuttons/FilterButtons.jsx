const FilterButtons = ({ data }) => {
  const mainData = data?.data?.cards[3]?.card?.card?.facetList;
  const headTitle = data?.data?.cards[2].card.card.title;

  return (
    <div className="w-full flex justify-center mt-8">
      <div className=" w-[75%] flex flex-col justify-center gap-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tighter">{headTitle}</h1>
        </div>
        <div className="flex gap-3">
          {mainData.map((items, i) => (
            <button
              key={i}
              className="border text-sm font-semibold text-center border-gray-300 px-4 py-2 rounded-full cursor-pointer"
            >
              {items?.facetInfo[0]?.label || ""}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterButtons;
