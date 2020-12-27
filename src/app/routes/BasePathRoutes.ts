import Routes, { IControllerRoute } from './Routes'
import { container } from '../inversify.config'
import { injectable } from 'inversify'

@injectable()
export default class BasePathRoutes extends Routes {

    /**
	 * IMPORTANT: User the '/' prefix before the path name
	 * to avoid the 404 Error
	 */
    basePath(): string {
        return ''
    }

    /**
	 * IMPORTANT: User the '/' prefix before the path name
	 * to avoid the 404 Error
	 */
    controllers(): IControllerRoute[] {
        return []
    }

}