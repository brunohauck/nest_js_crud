import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidoModule } from './pedido/pedido.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mydonation-db-atlas:isPHrREVLbFYofj9@mydonation-nfmxd.gcp.mongodb.net/pedido?retryWrites=true&w=majority'),
    PedidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
