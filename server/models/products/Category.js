import { Schema, model, models } from "mongoose";


const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    displayPicture: {
        type: String,
        required: [true, 'Add an image for the category']
    }
})

const Category = models.Category || model('Category', categorySchema);

export default Category;