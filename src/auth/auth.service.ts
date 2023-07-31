import {
  ConflictException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user || user.password !== pass) {
      return new UnauthorizedException();
    }

    return user;
  }

  async register(dto: CreateUserDto) {
    try {
      const user = await this.usersService.findByEmail(dto.email);
      if (user) {
        return new ConflictException('User already exists');
      }
      const userData = await this.usersService.create(dto);

      return { token: this.jwtService.sign({ id: userData.id }) };
    } catch (e) {
      console.log(e);
      throw new ForbiddenException();
    }
  }

  async login(user: User) {
    return {
      token: this.jwtService.sign({ id: user.id }),
    };
  }
}
