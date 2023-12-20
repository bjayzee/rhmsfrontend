import { iPhone } from "@/server/models";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";
import { NextResponse } from "next/server";



// Edit iPhone record

export async function PUT(request, {params}){
    try {
        const { id } = params;

        const requestObj = request.json();
        
        await connectDB();

        const responseObj = await iPhone.findByIdAndUpdate(id, { requestObj });

        return NextResponse.json({ status: httpStatus.OK }, { message: 'Updated successfully' }, { data: requestObj });
    } catch (error) {
        return NextResponse.json({status: httpStatus.BAD_REQUEST}, {message: error.message})
    } 
}


//Get iPhone by id
export async function GET(request, { params }) {
    try {
        const { id } = params;
        await connectDB();

        return NextResponse.json({ success: true, message: "Phone found successfully", data: await iPhone.findById(id) }, { status: httpStatus.FOUND })
    } catch (error) {
        return NextResponse.json({ success: false, message: "phone retrieval failed", data: error.message }, { status: httpStatus.NOT_FOUND })
    }
}