import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react"
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
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>)
}

export default Selection