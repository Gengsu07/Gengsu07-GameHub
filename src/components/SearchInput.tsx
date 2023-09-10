import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../Store";

const SearchInput = () => {
  const setSearchText = useGameQueryStore(s => s.setSearchText)
  const searchText = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchText.current) setSearchText(searchText.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<BsSearch />} />
        <Input
          placeholder="Search Games..."
          borderRadius={20}
          ref={searchText}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
