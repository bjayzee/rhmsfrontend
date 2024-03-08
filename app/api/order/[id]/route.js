import { Order } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";

export async function PUT(request, { params }){
    try {
        const { id } = params;
        const req = await request.json();
        
        const updatedOrder = await Order.findByIdAndUpdate(id, req, {new: true});
        return successMessage(
          "Order Updated successfully",
          updatedOrder,
          httpStatus.OK
        );
    } catch (error) {
        console.error("An error has occur", error);
        return failMessage(error, httpStatus.BAD_REQUEST, "error updating order");
    }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectDB();

    return successMessage(
      "Order fetched successfully",
      await Order.findById(id),
      httpStatus.FOUND
    );
  } catch (error) {
    console.error("An error has occur", error);
    return failMessage(error, httpStatus.NOT_FOUND, "error fetcing order data");
  }
}

export async function GET_ALL({params}){

    const { page, limit } = params;
      try {
        const orders = await Order.find()
          .skip((page - 1) * limit)
          .limit(limit);
        return successMessage('successful', orders, httpStatus.OK);
      } catch (error) {
        console.error("An error occurred while fetching articles:", error);
        return {
          statusCode: httpStatus.INTERNAL_SERVER_ERROR,
          body: JSON.stringify({ message: "Internal Server Error" }),
        };
      }
}