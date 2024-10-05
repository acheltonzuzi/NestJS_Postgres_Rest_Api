import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly database: DatabaseService) { }
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.database.employee.create({ data: createEmployeeDto });
  }

  async findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role)
      return this.database.employee.findMany({
        where: {
          role,
        },
      });
    return this.database.employee.findMany();
  }

  async findOne(id: number) {
    return this.database.employee.findUnique({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.database.employee.update({
      where:{id,},
      data:updateEmployeeDto

    })
  }

  async remove(id: number) {
    return this.database.employee.delete({ where: { id } });
  }
}
