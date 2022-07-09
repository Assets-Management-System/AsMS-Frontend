import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  &:hover img {
    transform: rotate(20deg);
  }
`
const Logo = () => {
    //todo: update image link   
  const dp = `/images/`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={dp} width={28} height={28} alt="AsMS"></Image>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="Montserrat"
            fontWeight="bold"
            fontSize="30px"
            ml={3}
          > 
            AsMS 
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo