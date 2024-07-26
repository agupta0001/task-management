import { NextFunction, Request, RequestHandler, Response } from "express";
import { handlePestoResponse, PestoResponse } from "../utils/response";

type AsyncHandler = (req: Request, res?: Response) => Promise<PestoResponse>;

export function asyncHandler(handler: AsyncHandler): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const handlerData = await handler(req, res);
      return handlePestoResponse(handlerData, res);
    } catch (error) {
      next(error);
    }
  };
}
