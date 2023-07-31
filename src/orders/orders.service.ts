import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  create(dto: CreateOrderDto, userId: string) {
    const newOrder = {
      user: { id: userId },
      frequency: dto.frequency,
      allergy: dto.allergy,
      cleaning: dto.cleaning,
      address: dto.address,
      schedule: dto.schedule,
    };
    return this.orderRepository.save(newOrder);
  }
}
