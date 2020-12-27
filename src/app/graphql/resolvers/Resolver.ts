import { injectable, inject } from 'inversify';
import { AuthenticationError, ForbiddenError } from 'apollo-server-express';
import { TYPES } from '../../types';
import { performance } from 'perf_hooks';
import { ResolverType } from './RESOLVER_TYPES';
import { Context } from '../Context';

@injectable()
export default abstract class Resolver {  
    /**
     * @var boolean Indicates if the Resolver should be Authenticated
     */
    isAuthenticatedResolver: boolean = true;
    
    context: Context;


    /**
     * User Roles to be allowed for the resolver
     * Leave blank to allow all roles
     */
    requiredPermissions(): string[] {
        return [];
    }

    /**
     * Type of the Resolver
     */
    abstract type(): ResolverType;

    /**
     * Name of the Resolver
     */
    abstract key(): string;

    /**
     * The Actual Resoler method that should be implemented
     * to resolve the request
     * @param parent Parent Arg for Resolver
     * @param params The parameters passed to the Resolver
     * @param context The Context Object
     */
    abstract handle(parent, params, context): any;
    
    private resolve = async (parent: any, params: any, context: Context) => {
        this.context = context;
        if ( this.isAuthenticatedResolver )
            this.checkAuth(context);

        try {
            let res = await this.handle(parent, params, context);
            return res;
        } catch( err ) {
            throw err;
        }
    }

    /**
     * Checks if the context has a specific permission
     * If a User is Admin, they are always allowed
     * @param permission Permission to Check in User Context
     * @returns boolean
     */

    /**
     * Auth Check Middleware
     * @param context Context The GraphQL Context
     * @throws AuthenticationError
     */
    private checkAuth(context: Context): boolean {
        if(context && !context.auth ) {
            let operation = `${this.type()}.${this.key()}`;
            throw new AuthenticationError("Unauthenticated");
        }
        return true;
    }

    /**
     * Returns GraphQL Resolver Object
     */
    get() {
        return {
            [this.type()]: {
                [this.key()]: this.resolve
            }
        }
    }
}