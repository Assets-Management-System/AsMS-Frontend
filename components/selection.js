import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react"
import Cards from "./cards"
const Selection = () => {
  return (
  <Tabs isFitted variant='enclosed' mt={65} >
  <TabList mb='1em'>
    <Tab>Furniture</Tab>
    <Tab>Technology</Tab>
    <Tab>Edibles</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Cards></Cards>
    </TabPanel>
    <TabPanel>
      <Cards></Cards>
    </TabPanel>
  </TabPanels>
</Tabs>)
}

export default Selection