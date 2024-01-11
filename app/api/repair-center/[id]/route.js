import { RepairCenter } from "@/server/models";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";
import { NextResponse } from "next/server";


export async function PUT(request, {params}){
    try {
        const { id } = params;

        const requestObj = request.json();
        
        await connectDB();

        const responseObj = await RepairCenter.findByIdAndUpdate(id, { requestObj });

        return NextResponse.json({ status: httpStatus.OK }, { message: 'Updated successfully' }, { data: requestObj });
    } catch (error) {
        return NextResponse.json({status: httpStatus.BAD_REQUEST}, {message: error.message})
    }
    
   
}