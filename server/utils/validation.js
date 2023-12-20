import Joi from 'joi';

const itemRepairValidation = Joi.object({
    type: Joi.string().valid('screen', 'battery', 'backGlass').required(),
    itemName: Joi.string().required(),
    economyPrice: Joi.number().required(),
    premiumPrice: Joi.number().required(),
});

const iPhoneSchema = Joi.object({
    name: Joi.string().required(),
    state: Joi.string().valid('new', 'used').required(),
    lockStatus: Joi.string().valid('locked', 'unlocked').default('unlocked'),
    storageAndPrice: Joi.object().pattern(Joi.string(), Joi.string()),
    color: Joi.array().items(Joi.string()),
    images: Joi.array().items(Joi.string().required()),
});

// Define Joi schema for the review sub-schema
const reviewSchema = Joi.object({
    content: Joi.string().required(),
    userId: Joi.string(),
    ratings: Joi.number().min(0).max(10),
});

// Define Joi schema for the specification sub-schema
const specificationSchema = Joi.object({
    capacity: Joi.string().required(),
    carrier: Joi.string().required(),
    color: Joi.string().required(),
    batteryHealth: Joi.number().default(0).min(0),
    grade: Joi.string().required(),
    network: Joi.string(),
    sim: Joi.string(),
});

// Define the main Joi schema for the product
const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    productType: Joi.string().required(),
    thumbnail: Joi.string(),
    images: Joi.array().items(Joi.string()),
    tagNumber: Joi.string(),
    dealOftheday: Joi.boolean(),
    price: Joi.number().default(0).min(0),
    costPrice: Joi.number().default(0).min(0),
    priceRange: Joi.string(),
    categoryName: Joi.string().required(),
    subCategory: Joi.string(),
    specification: specificationSchema,
    numInStock: Joi.number().required(),
    isFeatured: Joi.boolean().default(false),
    IMEI_SN: Joi.string().required(),
    batteryHealth: Joi.number().default(0).min(0),
    supplier: Joi.string(),
    dateReceived: Joi.date().required(),
    dealOfTheDay: Joi.boolean().default(false),
});




export {
    itemRepairValidation,
    iPhoneSchema,
    productSchema,
    specificationSchema,
    reviewSchema
}