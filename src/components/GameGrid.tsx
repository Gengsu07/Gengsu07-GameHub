import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamecardSkeleton from "./GamecardSkeleton";
import GameCards from "./GameCards";
import GameCardContainer from "./GameCardContainer";

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
        {isloading &&
          skeleton.map((i) => (
            <GameCardContainer>
              <GamecardSkeleton key={i} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCards key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
