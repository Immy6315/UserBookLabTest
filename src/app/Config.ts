import { Application } from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { injectable } from 'inversify';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const config = {
	port: process.env.PORT || 8400,
	dbUrl: process.env.DB_URL,
	privateKeyPath: process.env.PRIVATE_KEY_PATH,
	publicKeyPath: process.env.PUBLIC_KEY_PATH,
	logFilePath: path.join(__dirname, `../../${process.env.LOG_FILE_PATH}`),
	appName: process.env.APP_NAME,
	HOST: process.env.HOST,
	USER: process.env.USER,
	PASSWORD: process.env.PASSWORD,
	DB: process.env.DB,
	dialect: process.env.dialect,
	max: process.env.max,
	min: process.env.min,
	acquire: process.env.acquire,
	idle: process.env.idle
}

@injectable()
class Config {
	/**
	 * Function to get an app configuration attribute
	 * @param key Key of the configuration attribute requested
	 */
	public get(key: string): any {
		return config[key];
	}

	/**
	 * Function to accept an express app and return a new app with mounted configuration
	 * @param _express The express Application to mount the configuration to
	 */
	public init (_express: Application): Application {
		_express.locals.app = config;
		return _express;
	}
}

export default Config

// module.export = config;