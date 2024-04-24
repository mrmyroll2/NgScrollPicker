import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollPickerComponent } from './ng-scroll-picker.component';
import { GroupClassPipe } from './pipes/groupClass.pipe';
import { ItemClassPipe } from './pipes/item-class.pipe';
import { ItemStylePipe } from './pipes/item-style.pipe';

@NgModule({
  declarations: [NgScrollPickerComponent],
  imports: [CommonModule, GroupClassPipe, ItemClassPipe, ItemStylePipe],
  exports: [NgScrollPickerComponent],
})
export class NgScrollPickerModule {}
