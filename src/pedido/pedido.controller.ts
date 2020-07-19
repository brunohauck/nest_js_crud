import { Pedido } from './pedido';
import { PedidoService } from './pedido.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';


@Controller('pedido')
export class PedidoController {
    constructor(public service: PedidoService) { }

    @Get('findById/:id')
    get(@Param() params) {
      return this.service.findById(params.id);
    }
  
    @Post('create')
    create(@Body() user: Pedido) {
      return this.service.create(user);
    }
  
    @Put('update')
    update(@Body() user: Pedido) {
      return this.service.update(user);
    }
  
    @Delete('delete/:id')
    remove(@Param() params) {
      return this.service.remove(params.id);
    }
}
