import  {NextResponse} from "next/server";


const successMessage = (message, data, status) => 
    NextResponse.json({success: true, message: message, data: data}, {status: status});

const failMessage = (error, status, message) => 
    NextResponse.json({ success: false, message: error.message || message}, { status: error.status || status });



export {
    successMessage,
    failMessage
}