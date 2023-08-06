import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImg from "../services/ImageUrl";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isloading, errors } = useGenre();

  if (errors) return null;
  if (isloading) return <Spinner />;
  return (
    <List paddingY="10px">
      {data.map((i) => (
        <ListItem key={i.id}>
          <HStack>
            <Image
              boxSize="50px"
              src={getCroppedImg(i.image_background)}
              borderRadius={8}
            />
            <Button size="lg" variant="link" onClick={() => onSelectedGenre(i)}>
              {i.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
