import { TokenPayload } from "../types";
import jwt from "jsonwebtoken";

export function generateToken(payload: TokenPayload) {
  return jwt.sign(payload, process.env.PRIVATE_KEY!, { expiresIn: "1 day" });
}
