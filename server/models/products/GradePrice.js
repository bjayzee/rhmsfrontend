import { model, models, Schema } from "mongoose";


const gradePriceSchema = new Schema({
    grade: Number,
})

const GradePrice = models.GradePrice || model("GradePrice", gradePriceSchema);

export default GradePrice;