import Controller, { ApiError } from './Controller';
import { injectable, inject } from 'inversify';
import { TYPES } from '../types';
import { TokenGenerator } from '../providers/TokenHandler';
import { UserRepository } from '../database/repositories/UserRepository';
import Bcrypt from '../providers/hash-providers/Bcrypt';

@injectable()
export default class LoginController extends Controller {
    static readonly INVALID_CREDENTIALS = 'INVALID_CREDENTIALS';
    static readonly MISSING_IDENTIFIER = 'MISSING_IDENTIFIER';

    constructor(
        @inject(TYPES.TokenHandler) private tokenGenerator: TokenGenerator,
        @inject(TYPES.UserRepository) private userRep: UserRepository
    ){
        super();
    }

    async handle(req: any): Promise<any> {
        // console.log("Req", req.body)
        const { username, password } = req.body;
        console.log("Body", { username });

        if ( !username) {
            throw new ApiError(LoginController.MISSING_IDENTIFIER, 
                'username was not supplied');
        }
        let user = await this.userRep.findOne({
            username
        });
        console.log("user",user)
        if ( ! user ) 
            throw new ApiError(LoginController.INVALID_CREDENTIALS,
                'Invalid Credentials were supplied');
                // console.log("Passwird", password, await user.validatePassword( password ))
        let matchPassword = await Bcrypt.match(password, user.password);
        if ( password && matchPassword ) {
            // console.time('TOKEN');
            let token = this.tokenGenerator.generate(this.getPayloadForUser(user));
            // console.timeEnd('TOKEN');

            return { token }
        } else {
            throw new ApiError(LoginController.INVALID_CREDENTIALS,
                'Invalid Credentials were supplied')
        }
    }

    /**
     * Extract the payload object from a User Object
     * @param user The User Model Object
     * @returns Payload
     */
    getPayloadForUser(user: any): any {
        const { username } = user; 
        return {
            username
        }
    } 
}