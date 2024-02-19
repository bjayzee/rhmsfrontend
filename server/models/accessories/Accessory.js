import { Schema, models, model } from "mongoose";

const accessoriesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    images: [{
      type: String,
      required: true,
    }],
    color: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["iphone", "mac", "iwatch", "ipad"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    numInStock: {
      type: Number,
      required: true,
    },
    dateReceived: {
      type: Date,
    },
    IMEI_SN: {
      type: String,
      required: true,
    },
    supplier: {
      type: String,
    },
    costPrice: {
      type: String,
    },
  },
  { timestamps: true }
);

const Accessory = models.Accessory || model("Accessory", accessoriesSchema);

export default Accessory;
