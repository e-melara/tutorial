import { Controller, Post } from '@nestjs/common';

import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create() {
    const user: UserDto = {
      username: 'e-melara',
      password: '123456789',
    };

    return this.userService.createUser(user);
  }
}
