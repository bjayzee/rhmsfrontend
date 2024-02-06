import { string } from "joi";
import {Schema, model, models} from "mongoose";


const OldWatch = new Schema({
    name: String,
    type: String,
    size: String,
    caseMaterial: String,
    bandType: String,
        
})