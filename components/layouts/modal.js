import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import React, { Component, useState} from 'react'
import Router from 'next/router'

class Forms extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  static handleSubmit = event => {
    event.preventDefault()
  }
}

async function addCategory(name) {
  const res = await fetch('/api/category/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name
    })
  })
  const data = await res.json()
  console.log(data)
}

function AddCategory() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [name, setName] = useState()
  const nameUpdate = event => {
    setName(event.target.value)
  }

  return (
    <>
      <Button
        onClick={onOpen}
        ml={5}
        w="40px"
        colorScheme="teal"
        variant="solid"
        fontSize={25}
      >
        +
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adding</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form id="form" onSubmit={Forms.handleSubmit}>
              <FormControl>
                <FormLabel>Category Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="category name"
                  name="name"
                  onChange={nameUpdate}
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              type="submit"
              form="form"
              onClick={() => {
                addCategory(name)
                onClose()
                Router.reload(window.location.pathname)
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddCategory
