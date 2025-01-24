import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function GET(req) {
  const authHeader = req.headers.get("authorization");

  // Check if token exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Authentication token missing" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  console.log(token);

  try {
    // Verify the token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    console.log(payload);

    // Token is valid, proceed with the protected logic
    return NextResponse.json({ message: "Protected route accessed", user: payload }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 403 });
  }
}
