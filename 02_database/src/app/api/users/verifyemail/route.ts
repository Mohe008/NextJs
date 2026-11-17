import { connect } from "@/dbConfig/dbConfig";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

connect();

export const POST = async(request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const token = reqBody.token;
    console.log(token);

    const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}});
    if(!user) {
      return NextResponse.json({
        error: "Invalid or expired token",
        status: 400
      })
    }
    console.log(user);

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      message: "User verified successfully",
      success: true
    })
    

  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 500
    })
  }
}