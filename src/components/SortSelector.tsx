import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSorted: (sortOrder: string) => void;
  selectedSort: string | null;
}

const SortSelector = ({ onSorted, selectedSort }: Props) => {
  const Selector = [
    { value: " ", label: "Relevance" },
    { value: "-added ", label: "Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSelector = Selector.find(
    (sorter) => sorter.value === selectedSort
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by :{currentSelector?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {Selector.map((order) => (
          <MenuItem key={order.value} onClick={() => onSorted(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
