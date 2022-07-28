import {
  Box,
  Heading,
  Highlight,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const about = () => {
  return (
    <Box
      p={20}
      align="center"
      width="100%"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      <Heading
        size="4xl"
        noOfLines={1}
        pt={10}
        pb={{ lg: 50, md: 100, sm: 100 }}
      >
        <Highlight
          query="optimal"
          styles={{ px: '1', py: '1', rounded: 'full', bg: 'glassTeal' }}
        >
          Managing, the optimal way.
        </Highlight>
      </Heading>
      <Text fontSize="4xl">
        As our name , we will manage the assets of our company. <br></br>The Assets will
        be categorised in different categories like furniture, tech, etc.<br></br> So, in
        each category you will be able to see what all assets your company
        possesses and you can even add, update and delete the unwanted assets
        from the category it belongs.<br></br> This system also provides you with all the
        necessary attributes of all the assets for eg: mfg date, product name,
        time of insurance, etc.
      </Text>
    </Box>
  )
}

export default about
