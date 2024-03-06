import { Repair } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import { repairSchema } from "@/server/utils/validation";
import httpStatus from "http-status";

export async function POST(request){
    try {
        const requestObj = await request.json();
        await connectDB();

        const { error } = await repairSchema.validateAsync(requestObj);

        if(error){
            return failMessage(error, httpStatus.BAD_REQUEST, "Bad payload")
        }

        const repair = await Repair.create(requestObj);

        return successMessage("Item created successfully", repair, httpStatus.CREATED);
        
    } catch (error) {

        console.error("An error has occured with the repair request submission", error);
        return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, error.message)        
    }
}

export async function GET(){
    try {
        await connectDB();
        const res = await Repair.find();
        return successMessage('Repair Items fetched successfully', res, httpStatus.FOUND);
    } catch (error) {
        console.error('error fetching data', error);
        return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, error.message)
    }
}

export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id");

        await connectDB();
        await Repair.findByIdAndDelete(id);
        return successMessage(
          "Item deleted successfully",
          null,
          httpStatus.DELETE
        );
    } catch (error) {
        console.error('Problem deleting item', error);
        return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, error.message);
    }    
}