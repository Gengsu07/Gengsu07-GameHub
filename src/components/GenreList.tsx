import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGameQueryStore from "../Store";
import useGenre from "../hooks/useGenres";
import getCroppedImg from "../services/ImageUrl";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  const selectedGenreId = useGameQueryStore(s=> s.gameQuery.genreId)
  const setGenreId= useGameQueryStore(s=> s.setGenreId)

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl">Genres</Heading>
      <List paddingY="10px">
        {data?.results.map((i) => (
          <ListItem key={i.id} marginY={2}>
            <HStack>
              <Image
                boxSize="50px"
                src={getCroppedImg(i.image_background)}
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                fontWeight={i.id === selectedGenreId ? "bold" : ""}
                size="lg"
                variant="link"
                onClick={() => setGenreId(i.id)}
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
