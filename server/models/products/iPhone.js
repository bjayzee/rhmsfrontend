import { model, models, Schema } from "mongoose";


const iPhoneSchema = new Schema({
    name: {
        type: String,
        required: [true, "Phone name is required"]
    },
    state: {
        type: String,
        enum: ["new", "used"],
        required: [true, 'input the state of the phone, whether "new" or "used" ']
    },
    lockStatus: {
        type: String,
        enum: ["locked", "unlocked"],
        required: [true, "Lock status is required"], 
        default: "unlocked"
    },
    storageAndPrice: {
        type: Map,
        of: String,        
    },
    priceRange: {
        type: String,
        required: [true, "Price range has to be set"]
    },
    color: [
        {
            type: String
        }
    ],
    images: [{
        type: String,
        required: true
    }],
    description: {
        type: String
    },
    numInStock: {
        type: Number,
    },
    dealOftheday: {
        type: Boolean,
        default: false
    }
})


const iPhone = models.iPhone || model('iPhone', iPhoneSchema);

export default iPhone;