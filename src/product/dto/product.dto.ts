import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class ProductDto {
  @IsString() 
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  desc: string;

  @IsNotEmpty()
  price: number;
}