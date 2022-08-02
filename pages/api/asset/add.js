import connectMongo from '../../../utils/connectMongo';
import Asset from '../../../models/Asset';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addAsset(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const add = await Asset.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ add });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}