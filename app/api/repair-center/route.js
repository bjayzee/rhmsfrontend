import connectDB from "@/server/utils/db";
import repairController from "@/server/controller/repairController"
import { NextResponse } from "next/server";
import RepairCenter from "@/server/models/RepairCenter";
import httpStatus from "http-status";


export async function POST(request) {

    try {
        const req = await request.json();
        await connectDB();

        const repairCenter = await RepairCenter.create({
            email: req.email,
            address: req.address,
            phoneNumbers: req.phoneNumbers
        });

        return NextResponse.json({repairCenter});
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

export async function PUT(request){
    try {
        const reqObj = await request.body.json();

    } catch (error) {
        
    }
}