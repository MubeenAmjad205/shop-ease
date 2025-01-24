import connectDB from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();
  try {
    const user = await User.findById(params.id, { password: 0 }); // Exclude password
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}

export async function PATCH(req, { params }) {
    await connectDB();
    try {
      const { name, email } = await req.json();
  
      const updatedUser = await User.findByIdAndUpdate(
        params.id,
        { name, email },
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
  }
  export async function DELETE(req, { params }) {
    await connectDB();
    try {
      // console.log(params);
      
      const {id} = await params
      console.log("id : ", id);
      
      const deletedUser = await User.findByIdAndDelete(id);
      console.log("deletedUser : ", deletedUser);

      if (!deletedUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
    }
  }
  