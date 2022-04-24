import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from "mongoose"
import { ProductDto } from './dto';


@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}


  async createProduct(productDto: ProductDto) : Promise<Product> {
    const createdProduct = new this.productModel(productDto);
    return await createdProduct.save();
  }

  async findAll(): Promise<any[]> {
    return await this.productModel.find().exec();
  }

}
