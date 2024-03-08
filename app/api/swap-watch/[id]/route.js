import { OldWatch } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";

export async function PUT(request, { params }) {
  try {
    const { id } = params;

    const requestObj = await request.json();

    await connectDB();

    const responseObj = await OldWatch.findByIdAndUpdate(id, requestObj, {
      new: true,
    });
    return successMessage("Updated successfully", responseObj, httpStatus.OK);
  } catch (error) {
    console.error("An error has occured ", error);
    return failMessage(error, httpStatus.BAD_REQUEST, "Something went wrong");
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectDB();

    return successMessage(
      "Phone found successfully",
      await OldWatch.findById(id),
      httpStatus.FOUND
    );
  } catch (error) {
    console.error("an error has occured", error);
    return failMessage(error, httpStatus.BAD_REQUEST, "phone retrieval failed");
  }
}
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await connectDB();
    await OldWatch.findByIdAndDelete(id);
    return successMessage("Item deleted successfully", httpStatus.DELETE);
  } catch (error) {
    return failMessage(error, httpStatus.BAD_REQUEST, "item failed to delete");
  }
}
