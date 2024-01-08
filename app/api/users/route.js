import User from "@/server/models/RHMSUsers";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";

// Get all users
export async function GET(){
    try {
        await connectDB();

        const responseObj = await User.find();

        return successMessage('users retrieved successfully', responseObj, httpStatus.FOUND);
    } catch (error) {
        return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, 'fail to fetch users')
    }
}

//update user
export async function PUT(request){
    try {
        const requestData = await request.json();

        const id = request.nextUrl.searchParams.get("id");

        const responseObj = await User.findByIdAndUpdate(id, {...requestData}, {new: true});

        const { password, ...rest } = responseObj.toJSON();

        return successMessage('user updated successfully', rest, httpStatus.OK);
    } catch (error) {
        return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, 'fail to update user')
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        await RepairCenter.findByIdAndDelete(id);
        return successMessage({ status: httpStatus.DELETE }, { message: "Repair center deleted successfully" });
    } catch (error) {
        return NextResponse.json({ status: httpStatus.BAD_REQUEST }, { message: error.message });
    }
}