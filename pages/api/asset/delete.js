import connectMongo from '../../../utils/connectMongo';
import Asset from '../../../models/Asset';

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

    console.log(`DELETING DOCUMENT: ${req.query.assetId}`);
    const deleted = await Asset.deleteOne({
        _id: req.query.assetId
    })
    console.log('DELETED DOCUMENT');

    res.json({ deleted });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}