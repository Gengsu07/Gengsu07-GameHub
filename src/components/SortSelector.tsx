import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../Store";


const SortSelector = () => {
  const setSortText = useGameQueryStore(s=> s.setSortOrder)
  const selectedSort = useGameQueryStore(s=> s.gameQuery.sortOrder)
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
          <MenuItem key={order.value} onClick={() => setSortText(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
