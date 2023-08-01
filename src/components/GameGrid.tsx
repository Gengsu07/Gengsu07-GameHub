import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamecardSkeleton from "./GamecardSkeleton";
import GameCards from "./GameCards";

const GameGrid = () => {
  const { games, errors, isloading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {errors && <p>{errors}</p>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isloading && skeleton.map((i) => <GamecardSkeleton key={i} />)}
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
