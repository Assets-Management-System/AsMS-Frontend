import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 80px;
  &:hover img {
    transform: rotate(360deg); 
  }
`
const Logo = () => {
    //todo: update image link   
  const dp = `/images/AsMS_Logo.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={dp} width={125} height={100} alt="AsMS"></Image>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo