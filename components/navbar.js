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
  IconButton
} from '@chakra-ui/react'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'


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
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          flexGrow={8}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/assets" path={path}>
            Assets
          </LinkItem>
          <LinkItem href="#" path={path}>
            Coming soon
          </LinkItem>
          <LinkItem href="#" path={path}>
            Coming soon
          </LinkItem>
        </Stack>
        <Box flex={1} align="right" margin="auto">
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
