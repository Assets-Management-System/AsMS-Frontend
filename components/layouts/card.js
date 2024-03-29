import React from 'react'
import {
  AspectRatio,
  Image,
  Text,
  Stack,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react'
import Router from 'next/router'

function Card(props) {
  const { id, product, summary, longLine, path } = props

  return (
    <LinkBox
      p={4}
      display="inline-block"
      maxWidth="32rem"
      borderWidth={2}
      margin={2}
      fontFamily="Montserrat"
      rounded="md"
      onClick={() => Router.push({
        pathname:'/details',
        query: {
          assetId: id
        }
      })}
      path = {path}
    >
      <AspectRatio ratio={1 / 1}>
        <Image
          margin="auto"
          src="images/pdf.png"
          alt="PDF"
          rounded="md"
        />
      </AspectRatio>

      <Stack
        align={{ base: 'center', md: 'stretch' }}
        textAlign={{ base: 'center' }}
        mt={{ base: 4, md: 0 }}
      >
        <LinkOverlay
          href="#"
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          my={2}
        >
          {product}
          <Text
            mx={5}
            mt={2}
            display="block"
            fontSize="md"
            textAlign="left"
            lineHeight="normal"
            fontWeight="semibold"
          >
            {summary}
          </Text>
          <Text 
            mx={5} 
            my={5} 
            textAlign="left"
            fontSize="x-small"
          >
            {longLine}
          </Text>
        </LinkOverlay>
      </Stack>
    </LinkBox>
  )
}

export default Card