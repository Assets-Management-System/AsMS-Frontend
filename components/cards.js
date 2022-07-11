import React from "react";
import { ChakraProvider, SimpleGrid, Container } from "@chakra-ui/react";
import Card from "./Card";

function Cards() {
  const dataList = [
    {
      id: "1",
      product: "Product 1",
      summary: "This is a summary, can be any length",
      longLine: "Very short, can be any description"
    },
    {
      id: "2",
      product: "Product Two",
      summary:
        "Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf",
      longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos"
    },
    {
      id: "3",
      product: "Long Product",
      summary: "Finalize them summary, hurry, we are close to deadline",
      longLine: "Wow, this is very descriptive! I wonder how long it is"
    }
  ];

  return (
    <ChakraProvider>
      <Container maxW="80rem" centerContent>
        <SimpleGrid columns={[1, 2, 1, 2]}>
          {dataList.map(function (data) {
            const { id, product, summary, longLine } = data;
            return (
              <Card
                key={id}
                product={product}
                summary={summary}
                longLine={longLine}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
}

export default Cards