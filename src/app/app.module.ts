import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { NgScrollPickerModule } from 'ng-scroll-picker';

@NgModule({
  declarations: [AppComponent, BasicComponent],
  imports: [BrowserModule, AppRoutingModule, NgScrollPickerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
