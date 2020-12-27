import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'inversify';
interface ExtendedRequest extends Request {
    auth?: any
}


@injectable()
export default abstract class Controller {
    req: ExtendedRequest;
    res: Response;
    responseSent = false;

    requiresAuthentication = false;

    // middelwares: RouteMiddleware[] = [];

    /**
     * The Request Controller function responsible for processing all incoming requests
     * @param req Express.Request The Request Received
     * @param res Express.Response The Response Express Object
     */
    async process(req: Request, res: Response): Promise<any> {
        this.req = req
        this.res = res

        try {
            if ( this.requiresAuthentication ) {
                this.enforceAuth();
            }
            let response = await this.handle(req);
            if (!this.responseSent) {
                res.json({
                    status: 'success',
                    response
                });
            }
            
        } catch(err) {
            if ( err instanceof ApiError ) {
                res.json({
                    status: "error",
                    code: err.code,
                    message: err.message
                });
            } else {
                console.error("ERROR", err)
                throw err
            }
        }
    }


    /**
     * Checks and throws Authentication Error if neccessary
     */
    enforceAuth(): boolean {
        if ( ! this.req.auth )
            throw new ApiError(ApiError.UNAUTHENTICATED_ERROR_CODE, 'Unaithenticated');
        return true;
    }

    /**
     * Controller specific Function to handle requests
     * Needs to be implemented  
     * @param req The Request Object
     */
    abstract handle(req): Promise<any>
}

export class ApiError extends Error {
    static readonly UNAUTHENTICATED_ERROR_CODE = 'UNAUTHENTICATED';
    static readonly UNAUTHORIZED_ERROR_CODE = 'UNAUTHORIZED';
    constructor(public code: string, public message: string) {
        super(message)
    }
}