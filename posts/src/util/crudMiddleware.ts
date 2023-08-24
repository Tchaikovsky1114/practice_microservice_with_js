import { Request, Response } from "express";


const crudMiddleware = (req: Request, res: Response, next?: Function) => {
 
  next && next();
}

export default crudMiddleware;

