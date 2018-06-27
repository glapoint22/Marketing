import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxItems'
})
export class MaxItemsPipe implements PipeTransform {

  transform(items: Array<any>, count, showAll: boolean): Array<any> {
    return items.filter((item: any, index: number) => !showAll ? index < count : item);
  }
}