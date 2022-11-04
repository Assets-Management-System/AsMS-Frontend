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
      align="left"
      width="100%"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      <Heading
        size="2xl"
        noOfLines={1}
        pt={10}
        pb={{ lg: 50, md: 100, sm: 100 }}
      >
        <Highlight
          query="Optimal"
          styles={{ px: '1', py: '1', rounded: 'full', bg: 'glassTeal' }}
        >
          Managing, the Optimal way.
        </Highlight>
      </Heading>
      <Box boxShadow="outline" p="6" rounded="md" bg="whiteAlpha.100">
        <Text fontSize="2xl">
          As our name , we will manage the assets of our company. <br></br>The
          Assets will be categorised in different categories like furniture,
          tech, etc.<br></br> So, in each category you will be able to see what
          all assets your company possesses and you can even add, update and
          delete the unwanted assets from the category it belongs.<br></br> This
          system also provides you with all the necessary attributes of all the
          assets for eg: mfg date, product name, time of insurance, etc.
        </Text>
      </Box>
    </Box>
  )
}

export default about
