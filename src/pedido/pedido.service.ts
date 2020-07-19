import { Injectable } from '@nestjs/common';
import { Pedido } from './pedido';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PedidoService {

    constructor(
        @InjectModel('pedido') private readonly pedidoModel: Model<Pedido>,
    ) {
    }

    async create(doc: Pedido) {
        const result = await new this.pedidoModel(doc).save();
        return result.id;
    }

    async findById(id: number) {

    }

    async update(pedido: Pedido) {

    }

    async remove(pedido: Pedido) {

    }
}


