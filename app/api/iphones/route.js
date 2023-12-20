import { Category, Product } from "@/server/models";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get('query');

        const categoryData = query.category;

        const productName = query.name;

        if(categoryData){

            const category = await Category.findOne({name: categoryData});
            if(category){
                const productsInCategory = await Product.find({ category: category.id});

                return NextResponse.json({success: true, message: "products found", data: productsInCategory}, {status: httpStatus.FOUND})
            }

        }
        if(productName){
            const responseData = await Product.find({ name: query.name, });

            return NextResponse.json({success: true, message: "Product found successfully", data: responseData}, {status: httpStatus.FOUND})
        // query is "hello" for /api/search?query=hello
        }
    } catch (error) {
        return NextResponse.json({success: false, message: "Error fetching product" || error.message}, {status: error.status || httpStatus.BAD_REQUEST});
    }
}