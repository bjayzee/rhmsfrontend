import { OldiPhones } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import { oldiPhoneSchema } from "@/server/utils/validation";
import httpStatus from "http-status";
import { ApiError } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const requestData = await request.json();
    await connectDB();
    const { error } = await oldiPhoneSchema.validateAsync(requestData);
    if (error) {
      throw new ApiError(httpStatus.BAD_REQUEST, error.message);
    }
    const res = await OldiPhones.create(requestData);
    return successMessage(
      "Phone swap detail created successfully",
      res.toJSON(),
      httpStatus.CREATED
    );
  } catch (error) {
    console.error({ error });
    return failMessage(
      error.message,
      httpStatus.BAD_REQUEST,
      "Something went wrong"
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const resData = await OldiPhones.find();
    return NextResponse.json(
      { success: true, message: "Phones found successfully", data: resData },
      { status: httpStatus.FOUND }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong", data: error.message },
      { status: httpStatus.INTERNAL_SERVER_ERROR }
    );
  }
}


