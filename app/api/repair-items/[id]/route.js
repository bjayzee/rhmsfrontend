import { RepairItem } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";


export async function PUT(request, {params}){
    try {
        const { id } = params
        const req = await request.json();

        await connectDB();

        const res = await RepairItem.findByIdAndUpdate(id, req, {new: true});
        return successMessage('Repair item updated successfully', res, httpStatus.CREATED);
    } catch (error) {
        console.error('error updating item', error);
        return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
}

export async function GET(request, {params}){
    try {
         const { id } = params;
         await connectDB();

         const repair_item = await RepairItem.findById(id);

         return successMessage('item retrieved successfully', repair_item, httpStatus.OK);
    } catch (error) {
        console.error('error updating item', error);
        return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, error.message);
        
    }
}