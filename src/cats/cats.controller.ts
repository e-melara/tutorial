import { Controller, Get, Param, Post } from '@nestjs/common';

import { Cats } from './cats.entity';
import { CatsService } from './cats.service';

@Controller('casts')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cats[]> {
    return await this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.catsService.findOne(id.toString());
  }

  @Post()
  async create() {
    return this.catsService.create();
  }
}
