import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safePipeTs'
})
export class Safe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
