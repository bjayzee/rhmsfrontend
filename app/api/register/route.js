import User from "@/server/models/RHMSUsers";
import { failMessage, successMessage } from "@/server/utils/apiResponse";
import connectDB from "@/server/utils/db";
import bcrypt from "bcryptjs";
import httpStatus from "http-status";
import { ApiError } from "next/dist/server/api-utils";

export const POST = async (request) => {
    try {
        const { email, password, phone } = await request.json();

        await connectDB();

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new ApiError(httpStatus.BAD_REQUEST, "Email is already in use");
        }

        const hashedPassword = await bcrypt.hash(password, 5);
        const newUser = new User({
            email,
            password: hashedPassword,
            phoneNumber: phone
        });

        
            const data = await newUser.save();
            return successMessage("User created successfully", data, httpStatus.OK)
    } catch (err) {
       return failMessage(err, httpStatus.INTERNAL_SERVER_ERROR, "An error has occured")
    }
};