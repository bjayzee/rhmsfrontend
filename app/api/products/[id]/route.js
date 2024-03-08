import { Product, Specification } from "@/server/models";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";
import { NextResponse } from "next/server";



// Edit iPhone record

export async function PUT(request, {params}){
    try {
        const { id } = params;

        const {specification, ...requestObj} = await request.json();
        
        await connectDB();

        if(specification){
            const product = await Product.findById(id);

            const specId = product.specification._id;

            const specificationRes = await Specification.findByIdAndUpdate(specId, specification, {new: true})
        }

        const responseObj = await Product.findByIdAndUpdate(
          id,
          requestObj,
          { new: true }
        );

        return successMessage("Product updated successfully", responseObj, httpStatus.OK)
    } catch (error) {
        return failMessage(error, httpStatus.INTERNAL_SERVER_ERROR, "Product update fail")
    } 
}


//Get iPhone by id
export async function GET(request, { params }) {
    try {
        const { id } = params;
        await connectDB();

        return NextResponse.json({ success: true, message: "Product found successfully", data: await Product.findById(id).populate(["specification"]) }, { status: httpStatus.FOUND })
    } catch (error) {
        return NextResponse.json({ success: false, message: "Product retrieval failed", data: error.message }, { status: httpStatus.NOT_FOUND })
    }
}