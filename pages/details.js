import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react'
import { FaTrashAlt } from 'react-icons/fa'
import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import connectMongo from '../utils/connectMongo'
import Asset from '../models/Asset'
import moment from 'moment'

export const getServerSideProps = async ({ query }) => {
  console.log('CONNECTING TO MONGO')
  await connectMongo()
  console.log('CONNECTED TO MONGO')

  console.log('FETCHING DOCUMENTS')
  const asset = await Asset.findOne({ _id: query.assetId })
  console.log('FETCHED DOCUMENTS')

  console.log(asset)

  return {
    props: {
      asset: JSON.parse(JSON.stringify(asset))
    }
  }
}

async function deleteAsset(assetId, callback) {
  const res = await fetch('/api/asset/delete?' + new URLSearchParams({
    assetId
  }), 
  {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const data = await res.json()
  callback && callback(data.deleted.deletedCount > 0)
  console.log(data)
}

function details({ asset }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return asset ? (
    <Box mx={100}>
    <Heading
      size="3xl"
      noOfLines={1}
      textAlign="center"
      pt={10}
      pb={{ lg: 50, md: 100, sm: 100 }}
    >
      {asset.name}
      <Divider orientation="horizontal" bgColor="teal"></Divider>
    </Heading>

    <Box display="flex">
      <Box
        flex={2}
        maxH={600}
        border="2px"
        borderRadius="md"
        rounded="md"
        borderColor="teal"
        mr={10}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
          <Viewer fileUrl={asset.fileUrl} />
        </Worker>
      </Box>
      <Box flex={1}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={10}
        >
          <Button color="red.600" w={{ lg: 200, md: 100 }} h={50} onClick={()=>{
            console.log(asset._id)
            deleteAsset(asset._id, (isDeleted) => {
              // executed after deletion
              console.log(isDeleted);
            })
          }}>
            <FaTrashAlt />
          </Button>
        </Box>
        <Text fontSize="2xl">Description: {asset.description}</Text>
        <Text fontSize="2xl">
          MFG Date: {moment(asset.mfgDate).format('MMMM do yyyy')}
        </Text>
        <Text fontSize="2xl">Producer: {asset.producer}</Text>
        <Text fontSize="2xl">Company: {asset.company}</Text>
      </Box>
    </Box>
  </Box>) : (<Text mt={20}>Not found</Text>)
    
    }

export default details
