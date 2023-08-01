import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GamecardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden" width="300px">
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GamecardSkeleton;
