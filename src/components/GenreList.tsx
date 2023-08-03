import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImg from "../services/ImageUrl";

const GenreList = () => {
  const { data, isloading, errors } = useGenre();

  if (errors) return null;
  if (isloading) return <Spinner />;
  return (
    <List paddingY="5px">
      {data.map((i) => (
        <ListItem key={i.id}>
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImg(i.image_background)}
              borderRadius={8}
            />
            <Text fontSize="lg">{i.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
