import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@/app.controller';
import { TypeOrmConfigService } from '@/config/orm';
import { ItemModule } from './item';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';

type DatabaseConfig = {
  DB_PORT: number;
  DB_HOST: string;
  DB_USER: string;
  DB_NAME: string;
  DB_PASS: string;
}

export let ormtmp;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (
        _: ConfigService
      ) => new TypeOrmConfigService().createTypeOrmOptions(),
    }),
    ItemModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
