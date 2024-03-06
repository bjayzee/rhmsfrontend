import { Article } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";

export async function PUT(request, { params }){
    try {
        const { id } = params;
        const req = await request.json();
        
        const updatedArticle = await Article.findByIdAndUpdate(id, req, {new: true});
        return successMessage(
          "Article Updated successfully",
          updatedArticle,
          httpStatus.OK
        );
    } catch (error) {
        console.error("An error has occur", error);
        return failMessage(error, httpStatus.BAD_REQUEST, error.message);
    }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectDB();

    return successMessage(
      "Article fetched successfully",
      await Article.findById(id),
      httpStatus.FOUND
    );
  } catch (error) {
    console.error("An error has occur", error);
    return failMessage(error, httpStatus.NOT_FOUND, error.message);
  }
}

export async function GET_ALL({params}){

    const { page, limit } = params;
      try {
        const articles = await Article.find()
          .skip((page - 1) * limit)
          .limit(limit);
        return successMessage('successful', articles, httpStatus.OK);
      } catch (error) {
        console.error("An error occurred while fetching articles:", error);
        return {
          statusCode: httpStatus.INTERNAL_SERVER_ERROR,
          body: JSON.stringify({ message: "Internal Server Error" }),
        };
      }
}