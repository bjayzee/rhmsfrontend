import User from "@/server/models/RHMSUsers";


export async function POST(request){
    try {
        const requestData = await request.json();

        const userData = await User.create(requestData)
    } catch (error) {
        
    }
}