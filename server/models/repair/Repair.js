import { model, Schema, models } from "mongoose";

const repairSchema = new Schema({
    repairItem: {
        type: String,
        required: true
    },
    repairType: {
        type: String,
        required: true
    },
    repairCenter: {
        type: Schema.Types.ObjectId,
        ref: 'RepairCenter', 
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
},
    {
        timestamps: true
    });

const Repair = models.Repair || model('Repair', repairSchema); 

export default Repair;
