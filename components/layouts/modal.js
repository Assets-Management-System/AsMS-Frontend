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
  import React, { Component } from 'react'
  
  class Forms extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        category: ["Tech"],
      };
    }
  
    static handleSubmit = event => {
      event.preventDefault()
      this.setState({category: [...this.state.category, "hello"]})
    }
  }
  
  function AddCategory() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
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
                onClick={onClose}
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
  