import { ItemRepair } from "@/server/models";
import connectDB from "@/server/utils/db";
import { itemRepairValidation } from "@/server/utils/validation";
import httpStatus from "http-status";
import { NextResponse } from "next/server";



export async function POST(request){
    try {
        request = await request.json()
        await connectDB();
        const { error } = await itemRepairValidation.validateAsync(request);
        if (error) {
            throw new ApiError(httpStatus.BAD_REQUEST, "input validation failed");
        }
        const repair_item = await ItemRepair.create(request);
        return NextResponse.json({success: true, message: "Repair item created successfully", data: repair_item}, {status: httpStatus.CREATED})
    } catch (error) {
        return NextResponse.json({ success: false, message: "Repair item creation failed", data: error.message }, {status: httpStatus.BAD_REQUEST})
    }
}

export async function GET(){
    try {
        await connectDB();
        const resObj = await ItemRepair.find();
        return NextResponse.json({status: true, message: "Repair items fetched successfully", data: resObj}, {status: httpStatus.FOUND})
    } catch (error) {
        return NextResponse.json({ status: false, message: "error fetching items", data: resObj }, { status: httpStatus.BAD_REQUEST })
    }
}



export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        await ItemRepair.findByIdAndDelete(id);
        return NextResponse.json({ status: httpStatus.DELETE }, { message: "Repair center deleted successfully" });
    } catch (error) {
        return NextResponse.json({ status: httpStatus.BAD_REQUEST }, { message: error.message });
    }
}