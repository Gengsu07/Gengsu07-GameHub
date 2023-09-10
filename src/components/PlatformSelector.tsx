import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../Store";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";



const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore(s=> s.gameQuery.platformId)
  const selectedPlatform = usePlatform(selectedPlatformId);
  const setSelectedPlatform = useGameQueryStore(s=> s.setPlatfomId)
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((i) => (
          <MenuItem onClick={() => setSelectedPlatform(i.id)} key={i.id}>
            {i.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
