import { IsEmail, IsEnum, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nome: string;
  @IsEmail()
  email: string;
  @IsEnum(['ENGINEER', 'INTERN', 'ADMIN'])
  role: 'ENGINEER' | 'INTERN' | 'ADMIN';
}
