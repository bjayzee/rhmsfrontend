import { Order } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import { orderSchema } from "@/server/utils/validation";
import httpStatus from "http-status";
import { ApiError } from "next/dist/server/api-utils";


export async function POST(request){{
    try {
         const requestData = await request.json();

         const { error } = await orderSchema.validateAsync(requestData);

         if (error) {
           throw new ApiError(httpStatus.BAD_REQUEST, error.message);
         }

         await connectDB();

         const order = await Order.create(requestData);

         return successMessage(
           "Order created successfully",
           order,
           httpStatus.OK
         );
    } catch (error) {
        console.error("Order submission failed", error);
        return failMessage(error, httpStatus.BAD_REQUEST, "Order submission failed");
    }   
}}

export async function GET(){
    try {
        await connectDB();
        return successMessage("Orders fetched successfully", await Order.find(), httpStatus.OK);
    } catch (error) {
        console.error("error fetching orders", error);
        return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, "error fetching orders");
    }
}
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Order.findByIdAndDelete(id);
    return successMessage(
      "Order deleted successfully",
      " ",
      httpStatus.DELETE
    );
  } catch (error) {
    console.error({ error });
    return failMessage(
      error,
      httpStatus.BAD_REQUEST,
      "Order not deleted due to some error"
    );
  }
}