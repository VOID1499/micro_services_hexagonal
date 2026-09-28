import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min
} from 'class-validator';

export class CreateProductRequest {

  @IsString()
  @IsNotEmpty()
  public name!: string;

  @IsString()
  public description!: string;

  @IsNumber()
  @Min(1)
  public price!: number;

  @IsNumber()
  public stock!: number;
}