import { model, Schema } from "mongoose";


const itemRepairSchema = new Schema({
    type: String,
    itemName: {
        type: String,
    },
    price: {
        type:Number,
        require: true
    },
},
    {
        timestamps: true
    });

const ItemRepair = model('ItemRepair', itemRepairSchema);

export default ItemRepair;