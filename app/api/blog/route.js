import { Article } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import { articleSchema } from "@/server/utils/validation";
import httpStatus from "http-status";

export async function POST(request) {
  try {
    const req = await request.json();
    await connectDB();

    const { error } = await articleSchema.validateAsync(req);

    if (error) {
      return failMessage(error, httpStatus.BAD_REQUEST, "error.message");
    }
    const articleRes = await Article.create(req);

    return successMessage('Article created', articleRes, httpStatus.CREATED);
  } catch (error) {
    console.error('An error has occured', error);
    
    return failMessage(error, httpStatus.BAD_REQUEST, 'Article creation failed');
  }
}

export async function GET(){
    try {
        await connectDB();
        const res = await Article.find();

        return successMessage("All artciles fetched successfully", res, httpStatus.OK);
    } catch (error) {
        console.error('An error has occured', error);

        return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, "fail to get articles");
        
    }
}

export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        await Article.findByIdAndDelete(id);
        return successMessage(
          "Article deleted successfully",
          " ",
          httpStatus.DELETE
        );
    } catch (error) {
        console.error({ error });
        return failMessage(
          error,
          httpStatus.BAD_REQUEST,
          "Article not deleted due to some error"
        );
    }
}