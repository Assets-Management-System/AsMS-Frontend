import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Logo from './footerLogo'

const bottomNav = () => {
  return (
    <Container as="footer" role="contentinfo" pt={{ base: '4', md: '6' }} maxW="100%" >
      <Stack spacing={1} >
        <Stack justify="space-between" direction="row" align="center">
          <Logo />
          <ButtonGroup variant="ghost" pr={10}>
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/isha-dabas-b21889206/"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" size={30} />}
            />
            <IconButton
              as="a"
              href="https://github.com/IshaDabas"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" size={30} />}
            />
            <IconButton
              as="a"
              href="https://twitter.com/IshaDabas10"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" size={30}/>}
            />
          </ButtonGroup>
        </Stack>
        <Text align='center' fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} ISHA DABAS/UZAIR NAQVI @ All rights
          reserved.
        </Text>
      </Stack>
    </Container>
  )
}

export default bottomNav
