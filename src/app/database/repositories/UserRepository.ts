import { injectable, inject } from "inversify";
import { BaseRepository } from "./BaseRepository";
import { TYPES } from "../../types";
import { SequelizeDatabase } from "../Database";
import { link } from "fs";
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export interface IUser { 
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserRepository extends BaseRepository<IUser> {
    create(data: PartialBy<IUser,"id">): Promise<IUser>;
}

@injectable()
export class SequelizeUserRespository implements UserRepository {
    constructor(@inject(TYPES.Database) private sqldb: SequelizeDatabase){}

    create(user: PartialBy<IUser,"id">): Promise<IUser> {
        return this.sqldb.db['user'].create(user);
    } 

    findById(id: string): Promise<IUser> {
        return this.sqldb.db['user'].findById({ where: {id} });
    }
    
    findOne(filters?: any): Promise<IUser> {
        return this.sqldb.db['user'].findOne({ where: filters });
    }
    
    
    find(filters?: any, fields?: Array<keyof IUser>): Promise<IUser[]> {
        return this.sqldb.db['user'].findAll({ where: filters });
    }
    
    
    delete(id: string): Boolean {
        return this.sqldb.db['user'].delete({ where: {id} });
    }
    
    
    async deleteMany(filters: any): Promise<Number> {
        return this.sqldb.db['user'].deleteMany({ where: filters });
    }

    async save(data: IUser): Promise<IUser> {
        throw new Error("Method not implemented");
    }
}
