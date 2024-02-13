import { Accessory } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";
import { parse } from "querystring";

export async function GET(request) {
  try {
    await connectDB();

    const { category } = parse(
      request.url.split("?")[1]
    );
    if (category) {
      
      const productsInWatch = await Accessory.find({ category: category });
      return successMessage("category found successfully", productsInWatch, httpStatus.FOUND);
   }   
}catch (error) {
    console.error("Error fetching accessories:", error);
    return failMessage(
      error,
      httpStatus.BAD_REQUEST,
      "Error fetching accessories"
    );
  }
}
