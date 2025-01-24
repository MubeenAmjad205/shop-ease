import connectDB from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
connectDB()

export async function GET(req) {
  await connectDB();
  try {
    const users = await User.find({}, { password: 0 }); // Exclude passwords
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}


export async function POST(req) {
  await connectDB();
  try {
    const { name, email, password } = await req.json();
    // console.log(name, email, password);

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    } 
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = await User.create({ name, email, password });
    return NextResponse.json(newUser, { status: 201, success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
