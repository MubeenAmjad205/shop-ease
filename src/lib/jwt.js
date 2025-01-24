import { jwtVerify } from "jose";

export async function verifyJWT(token) {
    console.log("token : ", token);
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.log("error : ", error);
    throw new Error("Invalid or expired token");
  }
}
