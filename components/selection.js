import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import * as React from 'react'
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList
} from '@choc-ui/chakra-autocomplete'
import { FiChevronRight, FiChevronDown } from 'react-icons/fi'

var category = ['Tech']
function Selection() {
  return (
    <Flex pt="10" justify="center" align="center" w="full">
      <FormControl w="container.lg">
        <FormLabel fontSize={25}>Categories</FormLabel>
        <Box display="inline-flex" width="100%">
          <AutoComplete openOnFocus>
            {({ isOpen }) => (
              <>
                <InputGroup>
                  <AutoCompleteInput variant="filled" placeholder="Search..." />
                  <InputRightElement>
                    <Icon as={isOpen ? FiChevronRight : FiChevronDown} />
                  </InputRightElement>
                </InputGroup>
                <AutoCompleteList>
                  {category.map((category, cid) => (
                    <AutoCompleteItem
                      key={`option-${cid}`}
                      value={category}
                      textTransform="capitalize"
                    >
                      {category}
                    </AutoCompleteItem>
                  ))}
                </AutoCompleteList>
              </>
            )}
          </AutoComplete>
          <AddCategory></AddCategory>
        </Box>
        <FormHelperText>Choose your category</FormHelperText>
      </FormControl>
    </Flex>
  )
}
class Forms extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      category: ['Tech']
    }
  }

  saveInput = e => {
    this.setState({ input: e.target.value })
  }

  addNewItem = () => {
    this.setState(prevState => ({
      category: [...prevState.category, prevState.input],
    }));
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
            <form id="form" onSubmit={onClose}>
              <FormControl>
                <FormLabel>Category Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="category name"
                  name="name"
                  onChange={Forms.saveInput}
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
              onClick={Forms.addNewItem}
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

export default Selection
