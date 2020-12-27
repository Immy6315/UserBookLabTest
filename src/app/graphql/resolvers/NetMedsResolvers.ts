import Resolver from "./Resolver";
import { ResolverType } from "./RESOLVER_TYPES";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { container } from "../../inversify.config";
import { PackageRepository } from "../../database/repositories/PackageRepository"
import { UserPackageRepository } from "../../database/repositories/UserPackageRepository"


@injectable()
export class GetPackages extends Resolver {
    type(): ResolverType {
        return "Query";
    }    
    
    key(): string {
        return "getPackages";
    }

    constructor(
        @inject(TYPES.PackageRepository) private packageRepository: PackageRepository,
    ) {
        super();
    }
    
    async handle(parent: any, args: any, context: any): Promise<any> {
        // console.log(context)
        args.username = context.auth.username;
        let data:any = await this.packageRepository.findData(args)
        return data;
    }
}


@injectable()
export class UserPackages extends Resolver {
    type(): ResolverType {
        return "Query";
    }    
    
    key(): string {
        return "userPackages";
    }

    constructor(
        @inject(TYPES.UserPackageRepository) private userPackageRepository: UserPackageRepository,
    ) {
        super();
    }
    
    async handle(parent: any, args: any, context: any): Promise<any> {
        // console.log(context)
        args.username = context.auth.username;
        let data:any = await this.userPackageRepository.findData(args)
        return data;
    }
}


@injectable()
export class AddPackage extends Resolver {
    type(): ResolverType {
        return "Mutation";
    }    
    
    key(): string {
        return "addPackage";
    }

    constructor(
        @inject(TYPES.UserPackageRepository) private userPackageRepository: UserPackageRepository,
    ) {
        super();
    }
    
    async handle(parent: any, args: any, context: any): Promise<any> {
        let data:any = await this.userPackageRepository.create(args.in)
        console.log(data)
        return data;
    }
}

@injectable()
export class DeletePackage extends Resolver {
    type(): ResolverType {
        return "Mutation";
    }    
    
    key(): string {
        return "deletePackage";
    }

    constructor(
        @inject(TYPES.UserPackageRepository) private userPackageRepository: UserPackageRepository,
    ) {
        super();
    }
    
    async handle(parent: any, args: any, context: any): Promise<any> {
        let data:any = await this.userPackageRepository.deleteMany(args.in)
        console.log(data)
        return data;
    }
}


export const getAsArray: () => Resolver[] = () => {
    return [
        container.get(GetPackages),
        container.get(AddPackage),
        container.get(UserPackages),
        container.get(DeletePackage)


    ];
}