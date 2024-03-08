import { OldWatch } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";
import { parse } from "querystring";


export async function GET(request) {
  try {
    await connectDB();
    const { name } = parse(request.url.split("?")[1]);
    if (!name) {
      return successMessage("Item not found", [], httpStatus.NOT_FOUND);
    } else {
      const phoneData = await OldWatch.find({ name: name });

      console.log({ phoneData });

      if (phoneData.length === 0) {
        return successMessage("Item not found", [], httpStatus.NOT_FOUND);
      } else {
        return successMessage("Product found", phoneData, httpStatus.OK);
      }
    }
  } catch (error) {
    console.error({ error });
    return failMessage(
      error,
      httpStatus.BAD_REQUEST,
      "Failed to find products"
    );
  }
}

