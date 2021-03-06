import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(userDto: UserDto) {
    const user = this.userRepository.create(userDto);
    return await this.userRepository.save(user);
  }

  async findUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
