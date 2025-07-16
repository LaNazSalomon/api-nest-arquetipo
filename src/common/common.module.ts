import { Module } from '@nestjs/common';
import { ManejadorErrores } from './exceptions/ManejadorErrores';
import { UtilCA } from './helpers/util-ca';

@Module({
  providers: [ManejadorErrores, UtilCA],
  exports: [ManejadorErrores, UtilCA]
})
export class CommonModule {}
