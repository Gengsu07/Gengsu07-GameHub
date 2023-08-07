import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";

const Platforms = () => {
  const { data, errors } = usePlatform();
  if (errors) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((i) => (
          <MenuItem key={i.id}>{i.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Platforms;
