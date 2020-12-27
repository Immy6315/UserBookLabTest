import Routes, { IControllerRoute } from "./Routes";
import { Application, static as expressStatic } from "express";
import { join } from "path";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";

@injectable()
export class StaticRoute extends Routes {
    controllers(): IControllerRoute[] {
        throw new Error("Method not implemented.");
    }
    basePath(): string {
        throw new Error("Method not implemented.");
    }

    register(_e: Application): Application {
        const staticPath = join(__dirname, '../../../', 'videos/outputs');
        _e.use('/stream', expressStatic(staticPath));
        return _e;
    }

}