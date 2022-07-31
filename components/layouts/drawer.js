import { AddIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Box,
  FormLabel,
  Input,
  Textarea,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import Upload from '../fileUpload'

function AddAssets() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        colorScheme="teal"
        onClick={onOpen}
        h="full"
        w="full"
        variant="outline"
      >
        Add Asset
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Upload an Asset</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  ref={firstField}
                  id="name"
                  placeholder="Please enter asset name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box>

              <Box>
                <FormLabel htmlFor="mfgDate">Mfg Date</FormLabel>
                <Input
                  ref={firstField}
                  id="mfgDate"
                  placeholder="Please enter manufacturing date"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="producer">Producer</FormLabel>
                <Input
                  ref={firstField}
                  id="producer"
                  placeholder="Please enter the name of producer"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="company">Company</FormLabel>
                <Input
                  ref={firstField}
                  id="company"
                  placeholder="Please enter name of the company"
                />
              </Box>

              <Box>
              <FormLabel htmlFor="asset">Upload Asset</FormLabel>
              <Upload></Upload>
              </Box>

            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default AddAssets
