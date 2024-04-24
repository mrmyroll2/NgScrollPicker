import { Pipe, PipeTransform } from '@angular/core';
import { PickerDataModel } from '../ng-scroll-data.model';

@Pipe({
  name: 'itemClass',
  standalone: true
})
export class ItemClassPipe implements PipeTransform {

  transform(group: PickerDataModel, options: {isCurrentItem: boolean; divider: boolean}): unknown {
    const itemClass = [];
    if (!options.divider && options.isCurrentItem) {
      itemClass.push('smooth-item-selected');
    }
    if (group.textAlign) {
      itemClass.push('text-' + group.textAlign);
    }
    return itemClass;
  }

}
