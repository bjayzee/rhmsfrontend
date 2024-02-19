import { Accessory } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";

// Edit Accessory record

export async function PUT(request, { params }) {
  try {
    const { id } = params;

    const requestObj = await request.json();

    await connectDB();

    const responseObj = await Accessory.findByIdAndUpdate(id, requestObj, {
      new: true,
    });

    return successMessage("Updated successfully", responseObj, httpStatus.OK);
  } catch (error) {
    console.error("An error has occur", error);
    return failMessage(error, httpStatus.BAD_REQUEST, error.message);
  }
}

//Get Accessory by id
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectDB();

    return successMessage(
      "Updated successfully",
      await Accessory.findById(id),
      httpStatus.FOUND
    );
  } catch (error) {
    console.error("An error has occur", error);
    return failMessage(error, httpStatus.NOT_FOUND, error.message);
  }
}
