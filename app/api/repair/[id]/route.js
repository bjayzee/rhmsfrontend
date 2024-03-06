import { Repair } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";


export async function PUT(request, {params}){
    try {
        const { id } = params
        const req = await request.json();

        await connectDB();

        const res = await Repair.findByIdAndUpdate(id, req, {new: true});
        return successMessage('Repair submission updated successfully', res, httpStatus.CREATED);
    } catch (error) {
        console.error('error updating repair', error);
        return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
}

export async function GET(request, {params}){
    try {
         const { id } = params;
         await connectDB();

         const repair = await Repair.findById(id);

         return successMessage('item retrieved successfully', repair, httpStatus.OK);
    } catch (error) {
        console.error('error updating item', error);
        return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, error.message);
        
    }
}