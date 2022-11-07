import { Schema, model, models } from 'mongoose';

const assetSchema = new Schema({
  name: String,
  description: String,
  mfgDate: Date,
  producer: String,
  company: String,
  fileUrl: String,
  category: [{ type: Schema.Types.ObjectId, ref: 'Category', required: true }]
});

const Asset = models.Asset || model('Asset', assetSchema);

export default Asset;