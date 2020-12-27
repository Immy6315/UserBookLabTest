import Routes, { IControllerRoute } from './Routes'
import { container } from '../inversify.config'
import { injectable } from 'inversify'
import LoginController from '../controllers/LoginController'

@injectable()
export default class V1Routes extends Routes {
    // constructor(
    //     private fileUploadMiddleware: FileUploadMiddleware
    // ){
    //     super();
    //     console.log("Yes", this.fileUploadMiddleware)
    // }
    /**
	 * IMPORTANT: User the '/' prefix before the path name
	 * to avoid the 404 Error
	 */
    basePath(): string {
        return '/v1'
    }

    /**
	 * IMPORTANT: User the '/' prefix before the path name
	 * to avoid the 404 Error
	 */
    controllers(): IControllerRoute[]  {
        // console.log(this.fileUploadMiddleware)

        return [{
            path: '/login',
            controller: container.get(LoginController),
            method: 'post'
        }]
        }

}