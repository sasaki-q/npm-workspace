import { Repository, getRepository } from "typeorm"
import { Item } from "@workspace/domains/dist/item"

export abstract class ItemQuery {
    abstract getItemList(): Promise<Item[]>
}

export class ItemQueryImpl implements ItemQuery {
    private readonly _itemRepository: Repository<Item>

    constructor() {
        this._itemRepository = getRepository(Item);
    }

    async getItemList(): Promise<Item[]> {
        return await this._itemRepository.find();
    }
}