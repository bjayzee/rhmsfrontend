import connectDB from "@/server/utils/db";





export async function POST(request){
    try {
        request = await request.json();
        await connectDB();
    } catch (error) {
        
    }
}

// export function GET(request) {
//     const searchParams = request.nextUrl.searchParams
//     const query = searchParams.get('query')
//     // query is "hello" for /api/search?query=hello
// }