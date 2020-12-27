import Middleware from "./Middleware";
import { Application, Request, Response, NextFunction } from "express";
import { ApolloServer } from 'apollo-server-express';
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import Schema from "../graphql/Schema";
import { GraphQLError } from "graphql";
import { Error } from "mongoose";

@injectable()
export class GraphQL extends Middleware {

    constructor(
        @inject(TYPES.Schema) private schema: Schema,
    ) {
        super();
    }

    /**
     * The ApolloGraphQl Context builder
     * @param param0 The Object containing the Request Object
     * @returns Context
     */
    context = ({ req }) => {
        if ( req.auth ) {
            return { auth: req.auth };
        }
    }

    getTokenFromHeader(req: Request): string {
        if ( req.headers && req.headers.authorization ) {
            return req.headers.authorization.split(' ')[1];
        } else  {
            return null;
        }
    }

    register(app: Application): Application {
        if ( process.env.NODE_ENV === 'development' )
            console.log("Registering GraphQL Middleware")
        new ApolloServer({
            schema: this.schema.build(),
            context: this.context,
            formatError: err => this.logError(err)
        }).applyMiddleware({app});

        return app;
    }


    /**
     * Function to be passed in the formatError of Apollo Server
     * @param err The Error object
     * @returns err Error
     */
    logError(err: GraphQLError): GraphQLError {
        // TODO::Catch mongoose.castError to return INVALID_ENTITY_ID Error

        if ( err.originalError instanceof Error.CastError ) {
            // console.log("CastError");
            err.extensions.code = 'INVALID_ENTITY_ID';
        }
        return err;
    }

    handle(req: Request, res: Response, next: NextFunction) {
        // Nothing here
    }
}