import {
  Box,
  Container,
  Flex,
  useColorModeValue,
  Stack,
  Link,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Button
} from '@chakra-ui/react'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#000000' : inactiveColor}
        fontWeight="bold"
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const router = useRouter()

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
        maxW="-webkit-max-content"
        wrap="wrap"
        align="center"
        maxH="125"
      >
        <Flex align="center">
          <Logo></Logo>
        </Flex>
        <Stack
        spacing={10}
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justify={['center', 'space-between', 'flex-end']}
          flexGrow={6}
          mt={{ base: 4, nmd: 0 }}
        >
          <Button colorScheme="teal" variant="ghost" onClick={() => router.push('/about')} path={path} >
            About
          </Button>
          <Button colorScheme="teal" variant="ghost" onClick={() => router.push('/assets')} path={path}>
            Assets
          </Button>
          <Button colorScheme="teal" variant="ghost" onClick={() => router.push('/#')} path={path}>
            Contact Us
          </Button>
        </Stack>
        <Box pr={10} pl={20} flex={1} align="right" margin="auto">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Option"
              ></MenuButton>
              <MenuList>
                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/assets" passHref>
                  <MenuItem as={Link}>Assets</MenuItem>
                </NextLink>
                <NextLink href="#" passHref>
                  <MenuItem as={Link}>Coming soon</MenuItem>
                </NextLink>
                <MenuItem as={Link}>Coming soon</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
