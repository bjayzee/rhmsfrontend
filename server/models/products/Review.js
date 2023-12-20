import { Schema, model, models } from "mongoose";


const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    userId: {
        type: String
    },
    ratings: {
        type: Number,
        min: [0.0, 'Rating can not be less than 0.0'], 
        max: [10.0, 'Rating can not exceed 10.0']
    }
})

const Review = models.Review || model('Review', reviewSchema);

export default Review;