import { Category } from "@/server/models";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";
import { NextResponse } from "next/server";



export async function POST(request){
    
    try {
        const req = await request.json();

        await connectDB();

        const category = await Category.create(req);

        return NextResponse.json({ success: true, message: 'category created successfully', data: category.toJSON() }, { status: httpStatus.CREATED })
    } catch (error) {
        return NextResponse.json({success: false, message: `Error occur creating ${req.name} category`, data: error.message}, {status: error.status || httpStatus.BAD_REQUEST});
    }
    
}


//Get All Category

export async function GET() {

    try {
    
        await connectDB();

        const category = await Category.find();

        return NextResponse.json({ success: true, message: 'categories fetched successfully', data: category }, { status: httpStatus.FOUND })
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Error occur fetching categories', data: error.message }, { status: error.status || httpStatus.BAD_REQUEST });
    }

}

// Delete Category

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        await Category.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: `category deleted successfully` }, { status: httpStatus.DELETE });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: httpStatus.BAD_REQUEST });
    }
}