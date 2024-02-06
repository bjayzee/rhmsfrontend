import { Category, Product } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";
import { parse } from "querystring";

const message = "Products found successfully";

export async function GET(request) {
  try {
    await connectDB();

    const { category, name, subCategory, productType, dealOfTheDay } = parse(
      request.url.split("?")[1]
    );

    if (category) {
      const foundCategory = await Category.findOne({ name: category });
      if (foundCategory) {
        const productsInCategory = await Product.find({
          category: foundCategory.id,
        }).populate(["category", "specification"]);
        return successMessage(message, productsInCategory, httpStatus.FOUND);
      }
    } else if (subCategory) {
      const productsInSubCategory = await Product.find({ subCategory });
      return successMessage(message, productsInSubCategory, httpStatus.FOUND);
    } else if (productType) {
      const productsByType = await Product.find({ productType });
      return successMessage(message, productsByType, httpStatus.FOUND);
    } else if (name) {
      const foundProducts = await Product.find({ name: name }).populate([
        "specification",
        "category",
      ]);
      return successMessage(message, foundProducts, httpStatus.FOUND);
    } else if (dealOfTheDay !== undefined) {
      const foundProducts = await Product.find({ dealOftheday: dealOfTheDay }).populate(
        ["specification", "category"]
      );
      return successMessage(message, foundProducts, httpStatus.FOUND);
    }

    return failMessage("No matching criteria found", httpStatus.NOT_FOUND);
  } catch (error) {
    console.error("Error fetching products:", error);
    return failMessage(
      error,
      httpStatus.BAD_REQUEST,
      "Error fetching products"
    );
  }
}
