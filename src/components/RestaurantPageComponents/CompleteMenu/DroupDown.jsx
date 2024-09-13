import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export const AccordionItem = ({ title, onClick, isOpen, children }) => (
  <div className="border-b border-gray-200">
    <div
      className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="px-4 py-2">{title}</div>
      <div className="mr-4">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
    </div>
    {isOpen && <div className="px-4 py-2">{children}</div>}
  </div>
);
