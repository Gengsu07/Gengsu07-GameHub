import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImg from "../services/ImageUrl";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isloading, errors } = useGenre();

  if (errors) return null;
  if (isloading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl">Genres</Heading>
      <List paddingY="10px">
        {data.map((i) => (
          <ListItem key={i.id} marginY={2}>
            <HStack>
              <Image
                boxSize="50px"
                src={getCroppedImg(i.image_background)}
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                fontWeight={i.id === selectedGenre?.id ? "bold" : ""}
                size="lg"
                variant="link"
                onClick={() => onSelectedGenre(i)}
                whiteSpace="normal"
                textAlign="left"
              >
                {i.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
