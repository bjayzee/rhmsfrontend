import { ItemRepair } from "@/server/models";
import connectDB from "@/server/utils/db";
import httpStatus from "http-status";
import { NextResponse } from "next/server";




export async function PUT(request, { params }) {
    try {
        const {id} = params
        request = await request.json()
        await connectDB();
        const repair_item = await ItemRepair.findByIdAndUpdate(id, {...request}, {new: true});
        return NextResponse.json({ success: true, message: "Repair item updated successfully", data: repair_item }, { status: httpStatus.OK })
    } catch (error) {
        return NextResponse.json({ success: false, message: "Repair item creation failed", data: error.message }, { status: httpStatus.BAD_REQUEST })
    }
}

export async function GET(request, { params }) {
    try {
        const {id} = params;
        await connectDB();
       
        const repair_item = await ItemRepair.findById(id);
        return NextResponse.json({ success: true, message: "Repair item found", data: repair_item }, { status: httpStatus.FOUND })
    } catch (error) {
        return NextResponse.json({ success: false, message: "Repair item retrieval failed", data: error.message }, { status: httpStatus.NOT_FOUND })
    }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await connectDB();

    const repair_item = await ItemRepair.findByIdAndDelete(id);
    return NextResponse.json(
      { success: true, message: "Repair item deleted", data: repair_item },
      { status: httpStatus.FOUND }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Repair item delete failed",
        data: error.message,
      },
      { status: httpStatus.NOT_FOUND }
    );
  }
}