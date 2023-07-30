import {
  ConflictException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  jwtService: any;
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user || user.password !== pass) {
      return new UnauthorizedException();
    }
    // const payload = { sub: user.password, email: user.email };
    // return {
    //   access_token: await this.jwtService.signAsync(payload),
    // };
    return user;
  }

  async register(dto: CreateUserDto) {
    try {
      const user = await this.usersService.findByEmail(dto.email);
      if (user) {
        return new ConflictException('User already exists');
      }
      const userData = await this.usersService.create(dto);

      return userData;
    } catch (e) {
      console.log(e);
      throw new ForbiddenException();
    }
  }
}
