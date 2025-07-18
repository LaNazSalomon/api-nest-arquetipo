import { Module } from '@nestjs/common';
import { ManejadorErrores } from './exceptions/ManejadorErrores';
import { UtilCA } from './helpers/util-ca';
import { PaginationDto } from './dto/pagination.dto';

@Module({
  providers: [ManejadorErrores, UtilCA],
  exports: [ManejadorErrores, UtilCA],
})
export class CommonModule {}
