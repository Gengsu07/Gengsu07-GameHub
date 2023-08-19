import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamecardSkeleton from "./GamecardSkeleton";
import GameCards from "./GameCards";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error)
    return (
      <Text color="red" fontSize={28}>
        {error.message}
      </Text>
    );
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeleton.map((i) => (
            <GameCardContainer key={i}>
              <GamecardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCards game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          colorScheme="gray"
          variant="solid"
          marginY={3}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading" : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GameGrid;
