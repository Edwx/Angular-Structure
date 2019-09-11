import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePipeTs'
})
export class Capitalize implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
