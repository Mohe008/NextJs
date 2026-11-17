import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

connect();

export const GET = async (request: NextRequest) => {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findById(userId).select("-password");
    if(!user) {
      return NextResponse.json({
        error: "User not found",
        status: 404
      });
    }

    return NextResponse.json({
      message: "User found",
      user
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message || "Invalid token",
      status: 401
    });
  }
}