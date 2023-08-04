import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'Egor' })
  firstname: string;
  @ApiProperty({ default: 'egor33429@gmail.com' })
  email: string;
  @ApiProperty({ default: 'Egor1234' })
  password: string;
}
