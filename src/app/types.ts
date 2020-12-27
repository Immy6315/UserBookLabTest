const TYPES = {
    KeyStore: Symbol.for("KeyStore"),
    TokenHandler: Symbol.for("TokenHandler"),
    Config: Symbol.for("Config"),
    Database: Symbol.for("Database"),
    Logger: Symbol.for("Logger"),
    Schema: Symbol.for("Schema"),
    MetricCollector: Symbol.for("MetricCollector"),
    DateFormat: Symbol.for("DateFormat"),

    /**
     * Repositories
     */
    UserPackageRepository: Symbol.for("UserPackageRepository"),
    UserRepository: Symbol.for("UserRepository"),
    PackageRepository: Symbol.for("PackageRepository"),
};

export { TYPES };