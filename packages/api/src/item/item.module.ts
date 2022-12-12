import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '@workspace/domains/dist/item';
import { DatabaseModule } from '@/database';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item]),
    DatabaseModule,
  ],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
