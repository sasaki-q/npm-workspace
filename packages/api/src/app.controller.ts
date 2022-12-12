import { Controller, Get } from '@nestjs/common';
import { Item } from "@workspace/domains/dist/item"
import { ItemQuery, ItemQueryImpl } from "@workspace/infrastructure/dist/item"
import { getConnection, getRepository } from 'typeorm';

@Controller()
export class AppController {
  private readonly _class: ItemQuery
  constructor() {
    this._class = new ItemQueryImpl();
  }

  @Get()
  async getHello(): Promise<Item[]> {
    try{
      return await this._class.getItemList();
    }catch(err) {
      console.log("DEBUG get item list error message === ", err)
      throw err
    }
  }
}
