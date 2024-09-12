const FilterButtons = ({ data }) => {
  const mainData = data?.data?.cards[3]?.card?.card?.facetList;
  const headTitle = data?.data?.cards[2].card.card.title;

  return (
    <div className="w-full flex justify-center mt-4 sm:mt-8">
      <div className="w-full px-4 sm:w-[90%] md:w-[80%] lg:w-[75%] flex flex-col justify-center gap-3 sm:gap-5 overflow-hidden">
        <div>
          <h1 className="text-2xl font-bold tracking-tighter max-sm:text-lg">
            {headTitle}
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3 overflow-x-auto pb-2">
          {mainData.map((items, i) => (
            <button
              key={i}
              className="border text-xs sm:text-sm font-semibold text-center border-gray-300 px-2 sm:px-4 py-1 sm:py-2 rounded-full cursor-pointer whitespace-nowrap transition-all duration-200 ease-in-out hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
