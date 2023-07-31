import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ default: 'Every week' })
  frequency: string;
  @ApiProperty({ default: 'No allergies' })
  allergy: string;
  @ApiProperty({ default: 'Regular cleaning' })
  cleaning: string;
  @ApiProperty({ default: '357 Hasiragorb Way, Vifolk , DEW, 64818' })
  address: string;
  @ApiProperty({
    default: 'Monday(8:00-11:00, 18:00-20:00), Friday(8:00-11:00)',
  })
  schedule: string;
}
