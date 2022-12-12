import { TypeOrmConfigService } from '@/config';
import { DatabaseService } from '@/database/database.service';
import { Injectable } from '@nestjs/common';
import { Item } from '@workspace/domains/dist/item';
import { ItemQuery, ItemQueryImpl } from '@workspace/infrastructure/dist/item';

@Injectable()
export class ItemService {
    private readonly itemQueryModule: ItemQuery

    constructor(
        private readonly dbService: DatabaseService,
    ){
        this.itemQueryModule = new ItemQueryImpl();
    }

    async getListItem(): Promise<Item[]> {
        try{
            await this.dbService.manageConnection()
            return await this.itemQueryModule.getItemList();
        }catch(err){
            console.log("DEBUG get list item error message === ", err)
            throw err
        }
    }
}
