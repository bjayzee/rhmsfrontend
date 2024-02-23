import connectDB from "@/server/utils/db";

export async function POST(request){
    try {
        const requestObj = await request.json();
        await connectDB();


        
    } catch (error) {
        
    }
}