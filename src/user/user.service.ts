import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user_create.dto';

@Injectable()
export class UserService {
  users = [{ name: 'Achelton Pambo' }, { name: 'Joana Pambo' }];

  getUsers() {
    return this.users;
  }
  saveUser(data: CreateUserDto) {
    return data;
  }
}
