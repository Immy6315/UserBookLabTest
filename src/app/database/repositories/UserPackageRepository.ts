import { injectable, inject } from "inversify";
import { BaseRepository } from "./BaseRepository";
import { TYPES } from "../../types";
import { SequelizeDatabase } from "../Database";
import { link } from "fs";
import { IPackage } from "./PackageRepository";

const Sequelize = require('sequelize');
const Op = Sequelize.Op
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export interface IUserPackage { 
    id: number;
    username: string;
    packageId: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserPackageRepository extends BaseRepository<IUserPackage> {
    create(data: PartialBy<IUserPackage,"id">): Promise<IUserPackage>;
    findData(args: any): Promise<IPackage[]>;
    // deleteCustom(args: any): Boolean;
}

@injectable()
export class SequelizeUserPackageRespository implements UserPackageRepository {
    constructor(@inject(TYPES.Database) private sqldb: SequelizeDatabase){}

    create(args: PartialBy<IUserPackage,"id">): Promise<IUserPackage> {
        return this.sqldb.db['userpackage'].create(args);
    } 

    findById(id: string): Promise<IUserPackage> {
        return this.sqldb.db['userpackage'].findById({ where: {id} });
    }
    
    findOne(filters?: any): Promise<IUserPackage> {
        return this.sqldb.db['userpackage'].findOne({ where: filters });
    }
    
    
    find(filters?: any, fields?: Array<keyof IUserPackage>): Promise<IUserPackage[]> {
        return this.sqldb.db['userpackage'].findAll({ where: filters });
    }
    
    
    delete(id: string): Boolean {
        return this.sqldb.db['userpackage'].delete({ where: {id} });
    }
    
    // deleteCustom(args: any): Boolean {
    //     args = {
    //         where:{ 
    //             username: args.username,
    //             packageId: args.username,
    //         }
    //     }
    //     console.log(args)
    //     return this.sqldb.db['userpackage'].destroy(args);
    // }
    
    
    async deleteMany(filters: any): Promise<Number> {
        return this.sqldb.db['userpackage'].destroy({ where: filters });
    }

    async save(data: IUserPackage): Promise<IUserPackage> {
        throw new Error("Method not implemented");
    }

    
    async findData(args: any): Promise<IPackage[]> {
        let userpackage = await this.sqldb.db['userpackage'].findAll({where:{username:args.username}});
        let ids = userpackage.map(n=>n.packageId)
            console.log(ids)
        args = {
            where:{ 
                id: {
                    [Op.in]:ids
                }
            }
        }
        console.log(args)
        
        
        let data = await this.sqldb.db['package'].findAll(args);
        // console.log("data",data);
              return data;
    } 
}
