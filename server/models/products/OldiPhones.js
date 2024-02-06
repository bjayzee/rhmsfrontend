import { model, models, Schema } from "mongoose";


const OldiPhoneSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  storagePrice: {
    type: Number,
    required: true,
  },
  baseStorage: {
    type: String,
    required: true,
  },
  storageVariance: {
    type: [String], 
    required: true, 
  },
  lockStatus: {
    type: String,
    required: true,
  },
  pricePerGrade: [
    {
        type: Map,
        required: true,
    },
  ],
});


const OldiPhone = models.OldiPhone || model('OldiPhone', OldiPhoneSchema);

export default OldiPhone;