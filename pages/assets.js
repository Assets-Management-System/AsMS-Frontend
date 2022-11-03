import Selection from '../components/selection'
import Cards from '../components/cards'
import { Box } from '@chakra-ui/react'
import connectMongo from '../utils/connectMongo'
import Asset from '../models/Asset'
import Category from '../models/Category'
import {useState} from 'react'

export const getServerSideProps = async () => {
  console.log('CONNECTING TO MONGO')
  await connectMongo()
  console.log('CONNECTED TO MONGO')

  console.log('FETCHING DOCUMENTS')
  const assets = await Asset.find({})

  console.log('FETCHING Categories')
  const categories = await Category.find({})
  console.log('FETCHED DOCUMENTS')

  console.log(categories)

  console.log(assets)

  return {
    props: {
      assets: JSON.parse(JSON.stringify(assets)),
      categories: JSON.parse(JSON.stringify(categories))
    }
  }
}

const asset = ({ assets, categories }) => {

  const [selectedCategory, setSelectedCategory] = useState()

  return (
    
    <Box>
      <Selection categoryList={categories} setSelectedCategory={setSelectedCategory}></Selection>
      <Cards dataList={assets.filter((asset) => {
        return asset.category == selectedCategory?._id
      })} selectedCategory={selectedCategory}></Cards>
    </Box>
  )
}

export default asset