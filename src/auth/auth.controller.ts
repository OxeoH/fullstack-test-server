import { Request, Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiBody } from '@nestjs/swagger';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiBody({ type: LoginUserDto })
  async login(@Request() req) {
    return req.user;
  }

  @Post('register')
  @ApiBody({ type: CreateUserDto })
  async register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }
}
