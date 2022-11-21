import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';

import { HttpClientModule } from '@angular/common/http';
import { LoadComponentDirective } from './directives/load-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    LoadComponentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
