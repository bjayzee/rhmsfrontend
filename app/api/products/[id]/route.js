import { Product } from "@/server/models";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";
import { NextResponse } from "next/server";



// Edit iPhone record

export async function PUT(request, {params}){
    try {
        const { id } = params;

        const requestObj = await request.json();
        
        await connectDB();

        const responseObj = await Product.findByIdAndUpdate(id, { requestObj });

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

        return NextResponse.json({ success: true, message: "Product found successfully", data: await Product.findById(id).populate(["specification"]) }, { status: httpStatus.FOUND })
    } catch (error) {
        return NextResponse.json({ success: false, message: "Product retrieval failed", data: error.message }, { status: httpStatus.NOT_FOUND })
    }
}