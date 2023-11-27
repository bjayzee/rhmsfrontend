import { model, Schema} from "mongoose";


const repairCenterSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    phoneNumbers: [ {
        type: String,
    }],
    address: {
        type: String,
        unique: true
    },
},
{
    timestamps: true
});

const RepairCenter = model('RepairCenter', repairCenterSchema);

export default RepairCenter;