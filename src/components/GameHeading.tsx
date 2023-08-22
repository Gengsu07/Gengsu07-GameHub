import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);
  const heading = `${platform?.slug || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={2} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
