import {
  Box,
  Container,
  Flex,
  useColorModeValue,
  Stack,
  Link
} from '@chakra-ui/react'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'
import NextLink from 'next/link'
const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#000000' : inactiveColor}
        fontWeight="medium"
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      w="100%"
      style={{ backdropFilter: 'blur(10px)' }}
      fontFamily="Montserrat"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      as="NAV"
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        justifyContent="space-between"
        p={2}
        maxW="-moz-max-content"
        wrap="wrap"
        align="center"
      >
        <Flex align="center" mr={5}>
          <Logo></Logo>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/#" path={path}>
            About
          </LinkItem>
          <LinkItem href="/#" path={path}>
            Assets
          </LinkItem>
          <LinkItem href="#" path={path}>
            Coming soon
          </LinkItem>
          <LinkItem href="#" path={path}>
            Coming soon
          </LinkItem>
        </Stack>
        <Box flex={1} flexGrow={1} align="right">
          <ThemeToggleButton></ThemeToggleButton>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
