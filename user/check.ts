import { Request, Response } from "express";

export const check = (req: Request, res: Response, next: any) => {

    if (!req.body.first_name || req.body.first_name === "") {
      return res.json("first name is missing");
    }
    // if(req.body.middle_name&&req.body.middle_name===''){
    //     res.json('middle name is missing')
    // }
    // console.log("last name", req.body.last_name)
    if (!req.body.last_name || req.body.last_name.trim() === "") {
      //  console.log('no')
      return res.json("last name is missing");
    }
    // console.log("email", req.body.last_name)
    if (
      !req.body.email ||
      !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]{2,5})\.([a-zA-Z]{2,5})$/.test(
        req.body.email
      )
    ) {
      return res.json("email is missing/wrong");
    }
    // console.log("phone", req.body.last_name)
    if (!req.body.phone_no || !/^\d{10}$/.test(req.body.phone_no)) {
      return res.json("phone_no is missing/wrong");
    }
    // if(req.body.address&&req.body.address===''){
    //     res.json('address is missing')
    // }
    if (!req.body.roles || req.body.roles === "") {
      return res.json("roles is missing");
    }
    next();
};
