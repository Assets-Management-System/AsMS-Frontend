import connectMongo from '../../../utils/connectMongo';
import Category from '../../../models/Category';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addAsset(req, res) {
  try {
    console.log(req.query)
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log(`DELETING DOCUMENT: ${req.query.categoryId}`);
    const deleted = await Category.deleteOne({
        _id: req.query.categoryId
    })
    console.log('DELETED DOCUMENT');

    res.json({ deleted });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}