import { Application } from 'express';
import { injectable } from 'inversify';

export interface IConfigObject {
	port: number,
	dbUser: string,
	publicKeyPath: string,
	logFilePath: string,
	appName: string,
	bento4BinDirectory: string,
	bento4Key1: string,
	bento4Key2: string,
	bento4Prop1: string,
	bento4Prop2: string,
	appUrl: string,
	HOST: string,
	USER: string,
	PASSWORD: string,
	DB: string,
	dialect: string,
	max: number,
	min: number,
	acquire: number,
	idle: number

}

@injectable()
export default abstract class Config implements IConfig {

	/**
	 * Abstract Function to return a ConfigObject
	 */
	abstract config(): IConfigObject;

	/**
	 * Function to get an app configuration attribute
	 * @param key Key of the configuration attribute requested
	 */
	get(key: keyof IConfigObject): any {
        return this.config()[key];
    }

	/**
	 * Function to accept an express app and return a new app with mounted configuration
	 * @param _express The express Application to mount the configuration to
	 */
	init(_express: Application): Application {
        _express.locals.app = this.config;
		return _express;    
    }
}


export interface IConfig {
	/**
	 * Function to get an app configuration attribute
	 * @param key Key of the configuration attribute requested
	 */
	get(key: keyof IConfigObject): any

	/**
	 * Function to accept an express app and return a new app with mounted configuration
	 * @param _express The express Application to mount the configuration to
	 */
	init (_express: Application): Application
}

// export default Config

// module.export = config;