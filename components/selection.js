import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import * as React from 'react'
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList
} from '@choc-ui/chakra-autocomplete'
import { FiChevronRight, FiChevronDown } from 'react-icons/fi'
import AddCategory from './layouts/modal'

function Selection({ categoryList, setSelectedCategory }) {
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
                  {categoryList && categoryList.map((category) => (
                    <AutoCompleteItem
                      key={category._id}
                      value={category.name}
                      textTransform="capitalize"
                      onClick={() => {
                        setSelectedCategory(category)
                      }}
                    >
                      {category.name}
                    </AutoCompleteItem>
                  ))}
                </AutoCompleteList>
              </>
            )}
          </AutoComplete>
          <AddCategory></AddCategory>
        </Box>
      </FormControl>
    </Flex>
  )
}

export default Selection