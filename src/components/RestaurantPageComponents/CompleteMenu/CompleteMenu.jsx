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

  const [openCategories, setOpenCategories] = useState({}); // Manage which category is open
  const [openItems, setOpenItems] = useState({}); // Manage which item is open

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

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-[60%] border border-gray-300 rounded-lg max-md:w-[95%]">
        {filterData.map((item, categoryIndex) => (
          <div className="border-b border-gray-300" key={categoryIndex}>
            <AccordionItem
              title={item.card.card.title}
              onClick={() => handleCategoryClick(categoryIndex)}
              isOpen={openCategories[categoryIndex]}
            >
              {item.card.card.itemCards && item.card.card.itemCards.length > 0
                ? item.card.card.itemCards.map((element, itemIndex) => (
                    <MenuItem
                      key={itemIndex}
                      title={element.card.info.name}
                      description={element.card.info.description}
                      price={
                        element.card.info.finalPrice ||
                        element.card.info.defaultPrice ||
                        element.card.info.price
                      }
                      rating={element.card.info.ratings.aggregatedRating.rating}
                      ratingcount={
                        element.card.info.ratings.aggregatedRating.ratingCountV2
                      }
                      img={element.card.info.imageId}
                    />
                  ))
                : null}
              {item.card.card.categories && item.card.card.categories.length > 0
                ? item.card.card.categories.map((element, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      title={element.title}
                      onClick={() => handleItemClick(categoryIndex, itemIndex)}
                      isOpen={openItems[`${categoryIndex}-${itemIndex}`]}
                    >
                      {element.itemCards && element.itemCards.length > 0
                        ? element.itemCards.map((item, index) => (
                            <MenuItem
                              key={index}
                              title={item.card.info.name}
                              description={item.card.info.description}
                              price={
                                item.card.info.finalPrice ||
                                item.card.info.defaultPrice
                              }
                              rating={
                                item.card.info.ratings.aggregatedRating.rating
                              }
                              ratingcount={
                                item.card.info.ratings.aggregatedRating
                                  .ratingCountV2
                              }
                              img={item.card.info.imageId}
                            />
                          ))
                        : null}
                    </AccordionItem>
                  ))
                : null}
            </AccordionItem>
          </div>
        ))}
      </div>
    </div>
  );
}
