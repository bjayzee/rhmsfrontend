import { model, Schema, models } from "mongoose";


const itemRepairSchema = new Schema({
    type: {
        type: String,
        enum: ['screen', 'battery', 'backGlass'],
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    economyPrice: {
        type:Number,
        required: true
    },
    premiumPrice: {
        type: Number,
        required: true
    },
  },
    {
        timestamps: true
    });

const ItemRepair = models.ItemRepair || model('ItemRepair', itemRepairSchema);

export default ItemRepair;