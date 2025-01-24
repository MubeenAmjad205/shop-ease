import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid"; // For generating unique filenames
import connectDB from "@/lib/db";
import {Product} from "@/models/Product";
import { verifyJWT } from "@/lib/jwt"; // Function to verify JWT and decode the payload
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
    const products = await Product.find({});
    return NextResponse.json(products,{status:200});
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();

  try {
    // console.log("req : ", req);
    const token1 = req.headers;
    console.log("token1 : ", token1);
    const token = req.headers.get("authorization")?.split(" ")[1];
    // console.log("token : ", token);
    
    if (!token) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const decoded = await verifyJWT(token);

    // Check if the user is an admin
    if (decoded.role !== "admin") {
      return new NextResponse("Forbidden: Admin access required", { status: 403 });
    }

    const formData = await req.formData();
    const productName = formData.get("productName");
    const description = formData.get("description");
    const price = formData.get("price");
    const productImage = formData.get("productImage"); // This will be a file

    // Validate required fields
    if (!productName || !description || !price || !productImage) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    // Save the image to the public/uploads folder
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const uniqueFilename = `${uuidv4()}_${productImage.name}`;
    const filePath = path.join(uploadsDir, uniqueFilename);

    const fileStream = fs.createWriteStream(filePath);
    fileStream.write(Buffer.from(await productImage.arrayBuffer()));
    fileStream.end();

    // Save the product with the image src in the database
    const newProduct = await Product.create({
      productName,
      description,
      price,
      productImage: `/uploads/${uniqueFilename}`, // Relative path
      createdBy: decoded.userId,
    });

    return new NextResponse(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error.message);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
