import connectDB from "@/server/utils/db";
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import { RepairCenter } from "@/server/models";


export async function POST(request) {

    try {
        const req = await request.json();
        await connectDB();

        const repairCenter = await RepairCenter.create({
            email: req.email,
            address: req.address,
            phoneNumbers: req.phoneNumbers
        });

        return NextResponse.json({repairCenter}, {status: httpStatus.CREATED});
    } catch (error) {
        console.log(error.message)
    }
}

export async function GET(){

    try {
        await connectDB();
        const repairCenters = await RepairCenter.find();
        if(repairCenters){
            return NextResponse.json({ status: httpStatus.OK, message: "Repair Centers fetched successfully", data: repairCenters})
        }
    } catch (error) {
        return NextResponse.json({ status: httpStatus.BAD_REQUEST, data: error.message})
    }
}

export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        await RepairCenter.findByIdAndDelete(id);
        return NextResponse.json({status: httpStatus.DELETE}, {message: "Repair center deleted successfully"});
    } catch (error) {
        return NextResponse.json({status: httpStatus.BAD_REQUEST}, {message: error.message});        
    }
}