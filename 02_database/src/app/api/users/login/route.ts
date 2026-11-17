import { connect } from "@/dbConfig/dbConfig";
import { User } from "@/models/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export const POST = async(request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });
    if(!user) {
      return NextResponse.json({
        error: "User doesn't exists",
        status: 404
      })
    }
    console.log(user);

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      return NextResponse.json({
        error: "Password is not correct!!",
        status: 400
      })
    }

    const tokenData = {
      id: user._id
    }
    const token = jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET!, { expiresIn: "30d"});
    const response = NextResponse.json({
      message: "Login successful",
      success: true
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;

  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 500
    })
  }
}