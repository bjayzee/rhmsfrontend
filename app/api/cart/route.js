import OrderItem from "@/server/models/order/OrderItem";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import httpStatus from "http-status";


//  add products to cart
export async function POST(request){

    try {
        const requestData = await request.json();

        const orderItem = await OrderItem.insertMany([{
            productId: requestData.productId,
            quantity: requestData.quantity,
            price: requestData.price
        }])
        return successMessage("Order", orderItem, httpStatus.OK)
    } catch (error) {
        
        return failMessage(error, httpStatus.BAD_REQUEST, "Something went wrong");
    }
}