import { Handler } from "./Handler";
import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from "inversify";
import { TYPES } from "../types";

@injectable()
export default class ErrorHandler extends Handler {
    static readonly INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR' 

    handle = (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.json({
            status: 'error',
            code: ErrorHandler.INTERNAL_SERVER_ERROR,
            message: 'An unexpected error occured'
        });
    }
    
}