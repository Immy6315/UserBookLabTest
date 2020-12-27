export interface FieldSelection {
    [field: string]: boolean
}

export interface BaseRepository<IT> {
    create(data: IT): Promise<IT>;
    findById(id: string, fields?: FieldSelection): Promise<IT>;
    findOne(filters?: any, fields?: FieldSelection): Promise<IT>;
    find(filters?: any, fields?: any, populateRelations?:boolean): Promise<IT[]>;
    delete(id: string): Boolean;
    deleteMany(filters: any): Promise<Number>;
    save(data: IT): Promise<IT>;
}
