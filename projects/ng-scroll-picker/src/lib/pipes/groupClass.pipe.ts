import { Pipe, PipeTransform } from '@angular/core';
import { PickerDataModel } from '../ng-scroll-data.model';

@Pipe({
  name: 'groupClass',
  standalone: true
})
export class GroupClassPipe implements PipeTransform {

  transform(group: PickerDataModel): string[] {
    const defaultWeightClass = 'weight-' + (group.weight || 1);
    const groupClass = [defaultWeightClass];
    if (group.className) {
      groupClass.push(group.className);
    }
    return groupClass;
  }

}
