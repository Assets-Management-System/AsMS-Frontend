import { Hide, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 80px;
  &:hover img {
    transform: rotate(10deg);
  }
`
const Logo = () => {
  const dp = `/images/AsMS_Logo.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image
            src={dp}
            alt="AsMS"
            width="100"
            height="70"
            objectFit="contain"
          ></Image>
          <Hide below="lg">
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily="Montserrat"
              fontWeight="bold"
              fontSize="30px"
              ml={10}
            >
              Assets Management System
            </Text>
          </Hide>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
