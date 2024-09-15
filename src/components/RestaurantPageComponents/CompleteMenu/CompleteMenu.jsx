import React, { useState } from "react";
import { AccordionItem } from "./DroupDown";
import MenuItem from "./MenuItem";

// Main Component
export default function CompleteMenu({ data }) {
  const mainData =
    data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // Filter out items with title "Top Picks"
  const filterData = mainData.filter(
    (item) => item.card.card.title && item.card.card.title !== "Top Picks"
  );

  const [openCategories, setOpenCategories] = useState({});
  const [openItems, setOpenItems] = useState({});

  const handleCategoryClick = (index) => {
    setOpenCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleItemClick = (categoryIndex, itemIndex) => {
    setOpenItems((prev) => ({
      ...prev,
      [`${categoryIndex}-${itemIndex}`]: !prev[`${categoryIndex}-${itemIndex}`],
    }));
  };

  const handelClick = (item) => {
    const selected = localStorage.getItem("selected");
    let selectedList = [];

    try {
      selectedList = selected ? JSON.parse(selected) : [];
    } catch (e) {
      console.error(
        "Failed to parse localStorage data, resetting selected list.",
        e
      );
    }

    if (!selectedList.some((selectedItem) => selectedItem.id === item.id)) {
      selectedList.push(item);
      localStorage.setItem("selected", JSON.stringify(selectedList));
    }
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-[60%] border border-gray-300 rounded-lg max-md:w-[95%]">
        {filterData.map((item, categoryIndex) => {
          const { title, itemCards, categories } = item.card.card;

          return (
            <div className="border-b border-gray-300" key={categoryIndex}>
              <AccordionItem
                title={title}
                onClick={() => handleCategoryClick(categoryIndex)}
                isOpen={openCategories[categoryIndex]}
              >
                {itemCards?.length > 0 &&
                  itemCards.map((element, itemIndex) => {
                    const { info } = element.card;

                    return (
                      <MenuItem
                        key={itemIndex}
                        handelClick={() => handelClick(info)}
                        title={info.name}
                        description={info.description}
                        price={
                          info.finalPrice || info.defaultPrice || info.price
                        }
                        rating={info.ratings.aggregatedRating.rating || 0}
                        ratingcount={
                          info.ratings.aggregatedRating.ratingCountV2 || 0
                        }
                        img={info.imageId}
                      />
                    );
                  })}
                {categories?.length > 0 &&
                  categories.map((element, itemIndex) => {
                    const { title, itemCards } = element;

                    return (
                      <AccordionItem
                        key={itemIndex}
                        title={title}
                        onClick={() =>
                          handleItemClick(categoryIndex, itemIndex)
                        }
                        isOpen={openItems[`${categoryIndex}-${itemIndex}`]}
                      >
                        {itemCards?.length > 0 &&
                          itemCards.map((item, index) => {
                            const { info } = item.card;

                            return (
                              <MenuItem
                                key={index}
                                title={info.name}
                                description={info.description}
                                price={info.finalPrice || info.defaultPrice}
                                rating={
                                  info.ratings.aggregatedRating.rating || 0
                                }
                                ratingcount={
                                  info.ratings.aggregatedRating.ratingCountV2 ||
                                  0
                                }
                                img={info.imageId}
                              />
                            );
                          })}
                      </AccordionItem>
                    );
                  })}
              </AccordionItem>
            </div>
          );
        })}
      </div>
    </div>
  );
}
