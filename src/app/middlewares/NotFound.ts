import Middleware from "./Middleware";
import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";

@injectable()
export default class NotFoundMiddleware extends Middleware {
    
    static readonly NOT_FOUND_ERROR = 'NOT_FOUND_ERROR';

    handle = (req: Request, res: Response, next: NextFunction) => {
        res.status(404).json({
            status: 'error',
            code: NotFoundMiddleware.NOT_FOUND_ERROR,
            message: 'The requested endpoint does not exist'
        });

    }
}