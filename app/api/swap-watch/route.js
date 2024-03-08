import { OldWatch } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import { oldWatchSchema } from "@/server/utils/validation";
import httpStatus from "http-status";
import { ApiError } from "next/dist/server/api-utils";

export async function POST(request) {
  try {
    const requestData = await request.json();
    await connectDB();
    const { error } = await oldWatchSchema.validateAsync(requestData);
    if (error) {
      throw new ApiError(httpStatus.BAD_REQUEST, error.message);
    }
    const res = await OldWatch.create(requestData);
    return successMessage(
      "Watch swap detail created successfully",
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
    const resData = await OldWatch.find();
    return successMessage("Phones found successfully", resData, httpStatus.FOUND);
  } catch (error) {
    console.error("error fetching swap watch value", error);
    return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, "Error fetching swap watch price")
  }
}


