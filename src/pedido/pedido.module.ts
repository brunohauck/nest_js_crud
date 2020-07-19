import { Module } from '@nestjs/common';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';
import { Pedido, PedidoSchema } from './pedido';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'pedido', schema: PedidoSchema,
    }]),
  ],
  controllers: [PedidoController],
  providers: [PedidoService]
})
export class PedidoModule {}
