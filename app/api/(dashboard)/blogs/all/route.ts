import connect from "@/app/lib/db";
import Blog from "@/app/lib/modals/blog";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connect();

    const blogs = await Blog.find();
    return new NextResponse(JSON.stringify(blogs), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse("Error in fetching blogs" + error.message, {
      status: 500,
    });
  }
};
