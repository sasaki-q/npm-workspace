import { Controller, Get } from '@nestjs/common';
import { Item } from '@workspace/domains/dist/item';
import { ItemService } from './item.service';

@Controller("/item")
export class ItemController {
    constructor(
        private readonly itemService: ItemService
    ){}

    @Get()
    async getListItem(): Promise<Item[]> {
        return await this.itemService.getListItem();
    }
}
