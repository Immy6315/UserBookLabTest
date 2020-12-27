import { injectable, inject } from "inversify";
import { BaseRepository } from "./BaseRepository";
import { TYPES } from "../../types";
import { SequelizeDatabase } from "../Database";
import { link } from "fs";
const Sequelize = require('sequelize');
const Op = Sequelize.Op
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export interface IPackage { 
    id: number;
    SNo: number,
    itemId: string,
    itemName: string,
    type: string,
    Keyword: string,
    BestSellers: string,
    testCount: number,
    IncludedTests: string,
    url: string,
    minPrice: number,
    labName: string,
    fasting: number,
    availableAt: number,
    popular: string,
    category: string,
    objectID: string
}

export interface PackageRepository extends BaseRepository<IPackage> {
    create(data: PartialBy<IPackage,"id">): Promise<IPackage>;
    findData(args: any): Promise<IPackage[]>
}

@injectable()
export class SequelizePackageRespository implements PackageRepository {
    constructor(@inject(TYPES.Database) private sqldb: SequelizeDatabase){}

    create(args: PartialBy<IPackage,"id">): Promise<IPackage> {
        return this.sqldb.db['package'].create(args);
    } 

    findById(id: string): Promise<IPackage> {
        return this.sqldb.db['package'].findById({ where: {id} });
    }
    
    findOne(filters?: any): Promise<IPackage> {
        return this.sqldb.db['package'].findOne({ where: filters });
    }
    
    
    find(filters?: any, fields?: Array<keyof IPackage>): Promise<IPackage[]> {
        return this.sqldb.db['package'].findAll({ where: filters });
    }
    
    
    delete(id: string): Boolean {
        return this.sqldb.db['package'].delete({ where: {id} });
    }
    
    
    async deleteMany(filters: any): Promise<Number> {
        return this.sqldb.db['package'].deleteMany({ where: filters });
    }

    async save(data: IPackage): Promise<IPackage> {
        throw new Error("Method not implemented");
    }

    async findData(args: any): Promise<IPackage[]> {
        // // let shopId = args.shopId?args.shopId:'';
        // // let dataMatch :any = [];
        // let skip = args.page||0
        // let limit = args.pageSize||10
        // delete args.page
        // delete args.pageSize
        // console.log(args)
        // let filter = {
        //     where: args,
        //     limit: limit,
        //     offset: skip,
        // }
        // let data = await this.sqldb.db['package'].findAll(filter);
        let userpackage = await this.sqldb.db['userpackage'].findAll({});
        let ids = userpackage.map(n=>n.packageId)
            console.log(ids)
        if(args.in){
            args = {
                where:args.in
            }
        }
        else{
            args = {
                where:{ 
                    id: {
                        [Op.notIn]:ids
                    }
                }
            }
        }
        console.log(args)
        
        
        let data = await this.sqldb.db['package'].findAll(args);
        // console.log("data",data);
              return data;
    } 
}
