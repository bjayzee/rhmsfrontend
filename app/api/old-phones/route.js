import { OldiPhones } from "@/server/models";
import connectDB from "@/server/utils/db";
import { iPhoneSchema } from "@/server/utils/validation";
import httpStatus from "http-status";
import { ApiError } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";


export async function POST(request){
    try {
        const requestData = await request.json();
        await connectDB();
        const { error } = await iPhoneSchema.validateAsync(requestData);
        if (error) {
            throw new ApiError(httpStatus.BAD_REQUEST, error.message);
        }
        const res = await OldiPhones.create(requestData);
        return NextResponse.json({success: true, message: 'Phone created successfully', data: res.toJSON()}, {status: httpStatus.CREATED});
        } catch (error) {
        return NextResponse.json({success: false, message: 'Something went wrong', data: error.message}, {status: httpStatus.INTERNAL_SERVER_ERROR})
    }
}

export async function GET(){
    try {
        await connectDB();
        const resData = await OldiPhones.find();
        return NextResponse.json({success: true, message: 'Phones found successfully', data: resData}, {status: httpStatus.FOUND})
    } catch (error) {
        return NextResponse.json({success: false, message: 'Something went wrong', data: error.message}, {status: httpStatus.INTERNAL_SERVER_ERROR})
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        await OldiPhones.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Phone deleted successfully" }, { status: httpStatus.DELETE });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: httpStatus.BAD_REQUEST });
    }
}