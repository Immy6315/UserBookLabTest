import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import Config from "./providers/config/Config";
import DotEnvConfig from "./providers/config/DotEnvConfig";
import { JWTHandler, TokenGenerator} from "./providers/TokenHandler";
import getDecorators from "inversify-inject-decorators";
import { Database, SequelizeDatabase } from "./database/Database";
import Schema from "./graphql/Schema";
import AppSchema from "./graphql/AppSchema";

import { UserRepository, SequelizeUserRespository } from "./database/repositories/UserRepository";
import { UserPackageRepository, SequelizeUserPackageRespository } from "./database/repositories/UserPackageRepository";
import { PackageRepository, SequelizePackageRespository } from "./database/repositories/PackageRepository";
const container = new Container({ autoBindInjectable: true });

container.bind<Config>(TYPES.Config).to(DotEnvConfig).inSingletonScope();
container.bind<Database>(TYPES.Database).to(SequelizeDatabase).inSingletonScope();
container.bind<TokenGenerator>(TYPES.TokenHandler).to(JWTHandler).inRequestScope();
container.bind<Schema>(TYPES.Schema).to(AppSchema).inSingletonScope();

/**
 * Repositories
 */

container.bind<UserRepository>(TYPES.UserRepository).to(SequelizeUserRespository);
container.bind<UserPackageRepository>(TYPES.UserPackageRepository).to(SequelizeUserPackageRespository);
container.bind<PackageRepository>(TYPES.PackageRepository).to(SequelizePackageRespository);

let { lazyInject } = getDecorators(container);

export { container, lazyInject };