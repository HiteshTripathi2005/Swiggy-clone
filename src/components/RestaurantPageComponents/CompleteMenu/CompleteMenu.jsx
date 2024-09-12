import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";

export default function CompleteMenu({ data }) {
  const mainData = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  return (
    <AccordionGroup
      variant="outlined"
      transition="0.2s"
      sx={(theme) => ({
        maxWidth: 400,
        borderRadius: "lg",
        [`& .${accordionSummaryClasses.button}:hover`]: {
          bgcolor: "transparent",
        },
        [`& .${accordionDetailsClasses.content}`]: {
          boxShadow: `inset 0 1px ${theme.vars.palette.divider}`,
          [`&.${accordionDetailsClasses.expanded}`]: {
            paddingBlock: "0.75rem",
          },
        },
      })}
    >
      {mainData.map((items, i) => (
        <Accordion defaultExpanded={i === 0} key={i}>
          <AccordionSummary>
            {items?.card?.card?.title === "Top Picks"
              ? null
              : items?.card?.card?.title}
          </AccordionSummary>
          <AccordionDetails variant="soft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
      ))}
    </AccordionGroup>
  );
}
