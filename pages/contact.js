import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 300px;
  float: left;
  align: left;
`

const contact = () => {
  return (
    <Box
      p={20}
      align="left"
      width="100%"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      <Box
        borderColor="black"
        p="6"
        rounded="md"
        bg="whiteAlpha.100"
        maxHeight="100%"
      >
        <LogoBox>
          <Image
            src={`/images/AsMS_Logo.png`}
            alt="AsMS"
            width="100"
            height="300"
            objectFit="contain"
          ></Image>
        </LogoBox>
        <Box display={'inline-flex'} h={300}>
          <Text fontSize="2xl" pt={90}>
            Isha Dabas <br></br>
            ishadabas@icloud.com<br></br>
            9599137351
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default contact
