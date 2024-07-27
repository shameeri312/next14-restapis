import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/api/authMiddleware";

export const config = {
  matcher: "/api/:path*",
};

function logMiddleware(req: Request) {
  //   return { response: req.method + " " + req.url + " YES" };
}

export default function middleware(request: Request) {
  //   if (request.url.includes("/api/blogs")) {
  //     const logResult = logMiddleware(request);
  //     console.log(logResult.response);
  //   }
  //   console.log("Checking configuration");
  //   const authResult = authMiddleware(request);
  //   if (!authResult?.isValid) {
  //     return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
  //       status: 401,
  //     });
  //   }
  return NextResponse.next();
}
