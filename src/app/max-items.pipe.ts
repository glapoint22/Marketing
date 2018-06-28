import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxItems'
})
export class MaxItemsPipe implements PipeTransform {

  transform(items: Array<any>, count, showAll: boolean, showNone: boolean): Array<any> {
    if(showNone) {
      return [];
    }

    return items.filter((item: any, index: number) => !showAll ? index < count : item);
  }
}