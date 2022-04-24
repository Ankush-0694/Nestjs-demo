import {
  Controller,
  Post,
  Body,
  Get
} from '@nestjs/common';
import { ProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductService) {}

  @Post()
  async addProduct(@Body() productDto: ProductDto) {
    const productDetails = await this.productsService.createProduct(productDto);
    return productDetails;
  }

  @Get()
  async getAllProducts() {
    const products = await this.productsService.findAll();
    return products;
  }

}