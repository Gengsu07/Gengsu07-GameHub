import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<BsSearch />} />
      <Input placeholder="Search Games..." borderRadius={20} />
    </InputGroup>
  );
};

export default SearchInput;
