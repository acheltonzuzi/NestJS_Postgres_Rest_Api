import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user_create.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService;
  }
  @Post()
  saveUser(@Body(ValidationPipe) data: CreateUserDto) {
    return this.userService.saveUser(data);
  }
}
