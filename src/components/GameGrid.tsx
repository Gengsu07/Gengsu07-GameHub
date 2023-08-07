import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamecardSkeleton from "./GamecardSkeleton";
import GameCards from "./GameCards";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, errors, isloading } = useGames(gameQuery);
  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      {errors && <p>{errors}</p>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={2}
        padding="10px"
      >
        {isloading &&
          skeleton.map((i) => (
            <GameCardContainer key={i}>
              <GamecardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCards game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
