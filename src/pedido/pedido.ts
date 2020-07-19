
import * as mongoose from 'mongoose';

export const PedidoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    projeto: { type: String, required: true },
  });

export interface Pedido {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    projeto: string;

}
