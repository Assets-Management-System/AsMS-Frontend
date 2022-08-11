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
import React, { useState } from 'react'
import AWS from 'aws-sdk'
import Router from 'next/router'

const S3_BUCKET = process.env.NEXT_PUBLIC_BUCKET_NAME
const AWS_REGION = process.env.NEXT_PUBLIC_REGION

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY
})

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: AWS_REGION
})

function AddAssets({ selectedCategory }) {
  var [name, setName] = useState()
  var [description, setDescription] = useState()
  var [mfgDate, setMfgDate] = useState()
  var [producer, setProducer] = useState()
  var [company, setCompany] = useState()
  var [fileUrl, setFileUrl] = useState()

  const nameUpdate = event => {
    setName(event.target.value)
  }
  const descriptionUpdate = event => {
    setDescription(event.target.value)
  }
  const mfgUpdate = event => {
    setMfgDate(event.target.value)
  }
  const producerUpdate = event => {
    setProducer(event.target.value)
  }
  const companyUpdate = event => {
    setCompany(event.target.value)
  }

  const addAsset = async callback => {
    const res = await fetch('/api/asset/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        description: description,
        mfgDate: mfgDate,
        producer: producer,
        company: company,
        fileUrl: fileUrl,
        category: selectedCategory?._id
      })
    })
    const data = await res.json()
    callback()
    console.log(data)
  }

  //FILE UPLOAD
  const [progress, setProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileInput = e => {
    setSelectedFile(e.target.files[0])
    setFileUrl(
      `https://${process.env.NEXT_PUBLIC_BUCKET_NAME}.s3.amazonaws.com/${e.target.files[0].name}`
    )
  }

  const uploadFile = file => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name
    }

    myBucket
      .putObject(params)
      .on('httpUploadProgress', evt => {
        setProgress(Math.round((evt.loaded / evt.total) * 100))
      })
      .send(err => {
        if (err) console.log(err)
      })
  }

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
                  required
                  onChange={nameUpdate}
                  id="name"
                  placeholder="Please enter asset name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea
                  id="desc"
                  required
                  onChange={descriptionUpdate}
                  placeholder="Please enter description"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="mfgDate">Mfg Date</FormLabel>
                <Input
                  id="mfgDate"
                  onChange={mfgUpdate}
                  placeholder="Please enter manufacturing date"
                  type="date"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="producer">Producer</FormLabel>
                <Input
                  id="producer"
                  onChange={producerUpdate}
                  placeholder="Please enter the name of producer"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="company">Company</FormLabel>
                <Input
                  id="company"
                  onChange={companyUpdate}
                  placeholder="Please enter name of the company"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="asset">Upload Asset</FormLabel>
                <div>File Upload Progress is {progress}%</div>
                <input type="file" onChange={handleFileInput}></input>
                <Button
                  colorScheme="teal"
                  onClick={() => uploadFile(selectedFile)}
                >
                  Upload File
                </Button>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
              <Button
              isDisabled={progress!="100"}
                colorScheme="teal"
                onClick={() => {
                  onClose()
                  addAsset(() => {
                    Router.reload(window.location.pathname)
                  })
                }}
              >
                Submit
              </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default AddAssets
