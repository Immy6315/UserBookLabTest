import { Application } from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
import Config, { IConfigObject } from './Config';

import { injectable } from "inversify";
// import "reflect-metadata";

@injectable()
export default class DotEnvConfig extends Config {
	private configObj: IConfigObject;

    constructor() {
		super();
        dotenv.config({ path: path.join(__dirname, '../../../../.env') });
        this.configObj = {
            port: parseInt(process.env.PORT) || 80,
            dbUser: process.env.DB_USER,
            publicKeyPath: process.env.PUBLIC_KEY_PATH,
            logFilePath: path.join(__dirname, `../../../../${process.env.LOG_FILE_PATH}`),
			appName: process.env.APP_NAME || 'NetMedsBackend',
			bento4BinDirectory: process.env.BENTO4_BIN_DIR,
			bento4Key1: process.env.BENTO4_KEY_1,
			bento4Key2: process.env.BENTO4_KEY_2,
			bento4Prop1: process.env.BENTO4_PROP_1,
			bento4Prop2: process.env.BENTO4_PROP_2,
			appUrl: process.env.DOMAIN_NAME,
			HOST: process.env.HOST,
			USER: process.env.USER,
			PASSWORD: process.env.PASSWORD,
			DB: process.env.DB,
			dialect: process.env.dialect,
			max: parseInt(process.env.max),
			min: parseInt(process.env.min),
			acquire: parseInt(process.env.acquire),
			idle: parseInt(process.env.idle)
        };
    }
	
	config(): IConfigObject {
		return this.configObj;
	}

	/**
	 * Function to get an app configuration attribute
	 * @param key Key of the configuration attribute requested
	 */
	public get(key: keyof IConfigObject): any {
		// console.log(key, this.config[key], this.config);
		return this.configObj[key];
	}

	/**
	 * Function to accept an express app and return a new app with mounted configuration
	 * @param _express The express Application to mount the configuration to
	 */
	public init (_express: Application): Application {
		_express.locals.app = this.configObj;
		return _express;
	}
}

// export default Config

// module.export = config;
