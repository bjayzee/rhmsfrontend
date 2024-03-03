import { Schema, models, model } from "mongoose";


const specificationSchema = new Schema({
  capacity: {
    type: String,
    required: true,
  },
  carrier: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  batteryHealth: {
    type: Number,
    default: 0.0,
    min: [0, "Price can not be less than 0.0"],
  },
  grade: {
    type: String,
    required: true,
  },
  network: {
    type: String,
  },
  sim: {
    type: String,
  },
  processor: {
    type: String,
  },
  RAM: {
    type: String,
  },
  caseMaterial: {
    type: String,
  },
  bandType: {
    type: String,
  },
});


const Specification = models.Specification || model('Specification', specificationSchema);

export default Specification;