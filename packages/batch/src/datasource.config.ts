import { DataSource, DataSourceOptions } from 'typeorm';

export default new DataSource({
    type: "postgres",
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: ["/app/packages/domains/src/**/*.ts"],
    migrations: [`${__dirname}/migrations/**/*.ts`],
    cli: {
        entitiesDir: "/app/packages/domains/src",
        migrationsDir: `${__dirname}/migrations`,
    }
} as DataSourceOptions);