import React from 'react'
import { ChakraProvider, SimpleGrid, Container, Box } from '@chakra-ui/react'
import Card from './layouts/card'
import AddAssets from './layouts/drawer'

function Cards() {
  const dataList = [
    {
      id: '1',
      product: 'Product 1',
      summary: 'This is a summary, can be any length',
      longLine: 'Very short, can be any description'
    },
    {
      id: '2',
      product: 'Product Two',
      summary:
        'Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf',
      longLine: 'Billy Bob Bob Bob Bob likes Markiplier gameplay videos'
    },
    {
      id: '3',
      product: 'Long Product',
      summary: 'Finalize them summary, hurry, we are close to deadline',
      longLine: 'Wow, this is very descriptive! I wonder how long it is'
    }
  ]

  return (
    <ChakraProvider>
      <Container maxW="80rem" pt={10} centerContent>
        <SimpleGrid columns={[1, 2, 1, 2]}>
          {dataList.map(function (data) {
            const { id, product, summary, longLine } = data
            return (
              <Card
                key={id}
                product={product}
                summary={summary}
                longLine={longLine}
              />
            )
          })}
          <Box p={4} maxWidth="32rem" borderWidth={2} margin={2}>
            <AddAssets></AddAssets>
          </Box>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  )
}

export default Cards
