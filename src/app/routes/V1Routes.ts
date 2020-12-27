import Routes, { IControllerRoute } from './Routes'
import { container } from '../inversify.config'
import { injectable } from 'inversify'
import LoginController from '../controllers/LoginController'

@injectable()
export default class V1Routes extends Routes {
    basePath(): string {
        return '/v1'
    }
	controllers(): IControllerRoute[]  {
        
        return [{
            path: '/login',
            controller: container.get(LoginController),
            method: 'post'
        }]
        }

}
