import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { NgScrollPickerModule } from 'ng-scroll-picker';

@NgModule({
  declarations: [AppComponent, BasicComponent],
  imports: [BrowserModule, NgScrollPickerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
