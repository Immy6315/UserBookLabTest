import { verbose, Database as SqliteDatabaseClass } from 'sqlite3';
import Config from '../providers/config/Config';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import path from 'path';
import { Sequelize } from 'sequelize';
import user from '../database/models/user'
import pack from '../database/models/package'
import userpackage from './models/userpackage'


export interface Database {
	init(): any;
}

@injectable()
export class SequelizeDatabase implements Database {
	// @lazyInject(TYPES.Config) _config: Config

	db: Sequelize;
	constructor(
		@inject(TYPES.Config) private _config: Config,
	) {
		
	}

	/**
	 * Function responsible for initialization of the Database 
	 */
    public async init (): Promise<any> {
		const sequelize = new Sequelize(this._config.get("DB"), this._config.get("USER"), this._config.get("PASSWORD"), {
			host: this._config.get("HOST"),
			dialect: this._config.get("dialect"),
			pool: {
			  max: this._config.get("max"),
			  min: this._config.get("min"),
			  acquire: this._config.get("acquire"),
			  idle: this._config.get("idle")
			}
		  });
		const db:any = {};
		db.Sequelize = Sequelize;
		db.sequelize = sequelize;

		db.package = pack(sequelize, Sequelize);
		db.userpackage = userpackage(sequelize, Sequelize);
		db.user = user(sequelize, Sequelize);

		this.db = db;
	}
}