import { Accessory } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import { accessoriesSchema } from "@/server/utils/validation";
import httpStatus from "http-status";

export async function POST(request) {
  try {
    const requestData = await request.json();

    await connectDB();
    const { error } = await accessoriesSchema.validateAsync(requestData);
    if (error) {
      throw new ApiError(httpStatus.BAD_REQUEST, error.message);
    }

    const resData = await Accessory.create(requestData);

    return successMessage(
      "Accessory product created successfully",
      resData,
      httpStatus.CREATED
    );
  } catch (error) {
    console.error({ error });
    return failMessage(error, httpStatus.BAD_REQUEST, "Something went wrong");
  }
}

//Get All Products
export async function GET() {
  try {
    await connectDB();
    return successMessage(
      "Accessory products fetched successfully",
      await Accessory.find(),
      httpStatus.OK
    );
  } catch (error) {
    console.error({ error });
    return failMessage(error, httpStatus.BAD_REQUEST, "An error has occured");
  }
}

//Delete iPhone
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Accessory.findByIdAndDelete(id);
    return successMessage(
      "Accesory deleted successfully",
      " ",
      httpStatus.DELETE
    );
  } catch (error) {
    console.error({ error });
    return failMessage(
      error,
      httpStatus.BAD_REQUEST,
      "Accessory not deleted due to some error"
    );
  }
}
