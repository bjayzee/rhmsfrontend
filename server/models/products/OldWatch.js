import { model, models, Schema } from "mongoose";

const OldWatchSchema = new Schema({
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
  carrier: {
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

const OldWatch = models.OldWatch || model("OldWatch", OldWatchSchema);

export default OldWatch;
