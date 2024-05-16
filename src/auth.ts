import { Request, Response, NextFunction } from "express";
import Member from "./models/member_model";

const authMiddleware = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  req.user = { 
    _id: "ABCDEFGHIJKLM",
    roles: [
      'User', 'Admin'
    ]
  }
  req.token = token;

  next();

  // const token = req.headers.authorization;
  // if (token) {
  //   console.log("*** Auth Middlewear:", token);
  //   const member = await Member.findById(token);
  //   if (member) next();
  //   else
  //     return res
  //       .status(400)
  //       .send({ status: 400, message: "User not authenticated" });
  // } else {
  //   return res
  //     .status(400)
  //     .send({ status: 400, message: "User not authenticated" });
  // }
};

export default authMiddleware;
