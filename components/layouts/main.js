import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Assets Management System</title>
      </Head>
      <Navbar path = {router.path} ></Navbar>
      <Container maxW="100%" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main