import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './product.controller';
import { ProductSchema } from './product.model';
import { ProductService } from './product.service';


@Module({
  imports: [MongooseModule.forFeature([{ name : "Product", schema: ProductSchema }])],
  controllers: [ProductsController],
  providers: [ProductService]
})

export class ProductModule {}


/* 
 
if we want to use Prduct Schema then we need to export MongooseModule from here
 and import productModule in other module

*/