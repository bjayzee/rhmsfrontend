
import User from "@/server/models/RHMSUsers";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import bcrypt from 'bcrypt';
import httpStatus from "http-status";
import { ApiError } from "next/dist/server/api-utils";


export async function POST(request){
    try {
        const requestData = await request.json();
        const {password: plainPassword, ...rest} = requestData;
        await connectDB();

        const exists = await User.findOne({ $or: [{email}, {phoneNumber}]});
        if(exists){
            throw new ApiError(httpStatus.BAD_REQUEST, "Phone number or email already exists")
        }
        const hashedPassword = await bcrypt.hash(plainPassword, 10);

        const user = await User.create({...rest, password: hashedPassword});

        const { password, ...responseObj } = user.toJSON();

        return successMessage('User created successfully', responseObj, httpStatus.CREATED);
    } catch (error) {
        
        return failMessage(error, httpStatus.BAD_REQUEST, 'error creating user');
    }
}

