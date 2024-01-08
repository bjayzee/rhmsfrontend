import { Category, Product, Specification } from "@/server/models";
import connectDB from "@/server/utils/db";
import { productSchema, specificationSchema } from "@/server/utils/validation";
import httpStatus from "http-status";
import { ApiError } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

//CREATE Product


const createSpecification = async(param) =>{
    const { error } = await specificationSchema.validateAsync(param);
    if (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error.message);
    }
    
    return await Specification.create(param);
}
export async function POST(request){
    try {
        const requestData = await request.json();
        
        await connectDB();
        const { error } = await productSchema.validateAsync(requestData);
        if (error) {
            throw new ApiError(httpStatus.BAD_REQUEST, error.message);
        }
        
        
        const categoryData = await Category.findOne({ name: requestData.categoryName }).exec();

        if(!categoryData){
            throw new ApiError(httpStatus.BAD_REQUEST, "Category does not exist");
        }
        
        const category = categoryData.id;

        const specData = requestData.specification;
        const specification = await createSpecification(specData);
        if(!specification){
            throw new ApiError(httpStatus.BAD_REQUEST, "Product specification not created")
        }
        
        const res = await Product.create({...requestData, specification, category });
        return NextResponse.json({success: true, message: 'Product created successfully', data: res.toJSON()}, {status: httpStatus.CREATED});
        } catch (error) {
        return NextResponse.json({success: false, message: 'Something went wrong', data: error.message}, {status: error?.status || httpStatus.INTERNAL_SERVER_ERROR})
    }
}


//Get All Products
export async function GET(){
    try {
        await connectDB();
        const resData = await Product.find().populate(['specification', 'category']);
        return NextResponse.json({success: true, message: 'Products found successfully', data: resData}, {status: httpStatus.FOUND})
    } catch (error) {
        return NextResponse.json({success: false, message: 'Something went wrong', data: error.message}, {status: httpStatus.INTERNAL_SERVER_ERROR})
    }
}


//Delete iPhone
export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        await Product.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Product deleted successfully" }, { status: httpStatus.DELETE });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: httpStatus.BAD_REQUEST });
    }
}