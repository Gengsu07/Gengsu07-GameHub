import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";
import { Platforms } from "../hooks/useGames";

interface Props {
  onSelectedPlatform: (platform: Platforms) => void;
  selectedPlatforms: Platforms | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatforms }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatforms?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((i) => (
          <MenuItem onClick={() => onSelectedPlatform(i)} key={i.id}>
            {i.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
