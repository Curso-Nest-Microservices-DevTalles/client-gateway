import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

// Tiene los mismos campos que CreateProductDto, pero todos son opcionales
export class UpdateProductDto extends PartialType(CreateProductDto) {}
