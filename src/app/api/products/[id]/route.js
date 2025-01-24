import { NextResponse } from 'next/server';
import connectDB from "@/lib/db";
// import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';


export async function GET(req, { params }) {
  
  const {id} = await params
  console.log("id : ", id);
  if(!id){
    return new NextResponse("Product ID is required", { status: 400 });
  }
  await connectDB();
  try{

  const product = await Product.findById(id);
  if(!product){
    return new NextResponse("Product not found", { status: 404 });
  }
  return NextResponse.json(product);
}catch(error){
  console.log("Error fetching products:", error.message);
  return new NextResponse("Internal Server Error", { status: 500 });e
    }
}
