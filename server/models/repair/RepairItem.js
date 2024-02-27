import { model, Schema, models } from "mongoose";


const itemRepairSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    screenReplacement: {
      economyCost: {
        type: Number,
        required: true,
      },
      premiumCost: {
        type: Number,
        required: true,
      },
    },
    backGlassReplacement: {
      economyCost: {
        type: Number,
        required: true,
      },
      premiumCost: {
        type: Number,
        required: true,
      },
    },
    batteryReplacement: {
      economyCost: {
        type: Number,
        required: true,
      },
      premiumCost: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const RepairItem = models.RepairItem || model("RepairItem", itemRepairSchema);

export default RepairItem;