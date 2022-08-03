import React from 'react'
import { ChakraProvider, SimpleGrid, Container, Box } from '@chakra-ui/react'
import Card from './layouts/card'
import AddAssets from './layouts/drawer'

function Cards({ dataList }) {
  return (
    <ChakraProvider>
      <Container maxW="80rem" pt={10} centerContent>
        <SimpleGrid columns={[1, 2, 1, 2]}>
          {dataList.map(function (data) {
            const { _id, name, description, company } = data
            return (
              <Card
                id={_id}
                key={_id}
                product={name}
                summary={description}
                longLine={company}
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
