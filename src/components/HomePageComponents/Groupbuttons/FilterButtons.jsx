const FilterButtons = ({ data }) => {
  // Use optional chaining and fallback safely for mainData
  const mainData =
    data?.data?.cards?.find((card) => card?.card?.card?.facetList)?.card?.card
      ?.facetList || [];

  // Set headTitle with a fallback
  const headTitle =
    data?.data?.cards?.[2]?.card?.card?.title || "Default Title";

  return (
    <div className="w-full flex justify-center mt-4 sm:mt-8">
      <div className="w-full px-4 sm:w-[90%] md:w-[80%] lg:w-[75%] flex flex-col justify-center gap-3 sm:gap-5 overflow-hidden">
        {/* Title Section */}
        <div>
          <h1 className="text-2xl font-bold tracking-tighter max-sm:text-lg">
            {headTitle}
          </h1>
        </div>

        {/* Filter Buttons Section */}
        <div className="flex flex-wrap gap-2 sm:gap-3 overflow-x-auto pt-3 pb-2">
          {mainData.length > 0 ? (
            mainData.map((item, i) => (
              <button
                key={i}
                className="border text-xs sm:text-sm font-semibold text-center border-gray-300 px-2 sm:px-4 py-1 sm:py-2 rounded-full cursor-pointer whitespace-nowrap transition-all duration-200 ease-in-out hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                {item?.facetInfo?.[0]?.label || "offer closed"}
              </button>
            ))
          ) : (
            <p>No filters available</p> // Optional: Fallback if no filters exist
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterButtons;
