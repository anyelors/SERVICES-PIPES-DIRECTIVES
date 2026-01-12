import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock',
})
export class StockPipe implements PipeTransform {

  transform(value: number): string {
    return value > 5 ? "En Stock" : value > 0 && value <= 5 ? `Solo quedan ${value} unidades` : "No Disponible";
  }

}
