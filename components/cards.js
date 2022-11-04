import React from 'react'
import {
  ChakraProvider,
  SimpleGrid,
  Container,
  Box,
  Center,
  Text
} from '@chakra-ui/react'
import Card from './layouts/card'
import AddAssets from './layouts/drawer'
import { AiOutlineArrowUp } from 'react-icons/ai'

function Cards({ dataList, selectedCategory }) {
  return selectedCategory ? (
    <ChakraProvider>
      <Container maxW="80rem" pt={10} px={25} centerContent>
        <SimpleGrid columns={[1, 4]}>
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
            <AddAssets selectedCategory={selectedCategory}></AddAssets>
          </Box>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  ) : (
    <Center fontSize="2xl">
      <AiOutlineArrowUp color='teal'></AiOutlineArrowUp>
      <Text mx={5}>Choose a category</Text>
      <AiOutlineArrowUp color='teal'></AiOutlineArrowUp>
    </Center>
  )
}

export default Cards