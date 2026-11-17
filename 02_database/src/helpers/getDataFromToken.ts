import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

export const getDataFromToken = async (request: NextRequest) => {
  const token = request.cookies.get("token")?.value || "";
  if (!token) {
    throw new Error("No token found in cookies");
  }
  const decodedToken: any = jwt.verify(token, process.env.JWT_TOKEN_SECRET!);
  return decodedToken.id;
}