import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter',
  standalone: true,
})
export class TempConverterPipe implements PipeTransform {
  transform(value: number): number | null {
    if (!isNaN(value)) {
      // Convert Celsius to Fahrenheit
      return (value * 9) / 5 + 32;
    }

    return null;
  }
}
