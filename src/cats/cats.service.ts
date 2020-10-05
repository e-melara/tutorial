import * as faker from 'faker';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Cats } from './cats.entity';
import { CatDto } from './cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cats)
    private catsRepository: Repository<Cats>,
  ) {}

  findAll(): Promise<Cats[]> {
    return this.catsRepository.find();
  }

  findOne(id: string): Promise<Cats> {
    return this.catsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.catsRepository.delete(id);
  }

  async create() {
    const catsDto = this.getCatsDto();
    return await this.catsRepository.save(catsDto);
  }

  private getCatsDto(): CatDto {
    const catsDto: CatDto = {
      age: faker.random.number({ max: 10, min: 1 }),
      breed: faker.name.lastName(),
      name: faker.name.firstName(),
      id: null,
    };

    return catsDto;
  }
}
