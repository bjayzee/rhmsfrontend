import { Schema, models, model } from "mongoose";


const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    subCategory:{
        type: String
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    specification: {
        type: Schema.Types.ObjectId,
        ref: 'Specification'
    },
    thumbnail: {
        type: String
    },
    images: [{
        type: String
    }],
    tagNumber: {
        type: String
    },
    price : {
        type: Number,
        default:0.0,
        min:[0, 'Price can not be less than 0.0']
    },
    costPrice: {
        type: Number,
        default: 0.0,
        min: [0, 'Cost Price can not be less than 0.0']
    },
    priceRange: {
        type: String,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    numInStock: {
        type: Number,
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    IMEI_SN: {
        type: String,
        required: true
    },  
    supplier: {
        type: String,
    },
    dateReceived: {
        type: Date,
       required: true
    },
    dealOftheday: {
        type: Boolean,
        default: false
    }
}, 
{ timestamps: true })


const Product = models.Product || model('Product', productSchema);

export default Product;