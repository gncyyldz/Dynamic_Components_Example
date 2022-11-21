import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { LoadComponentDirective } from './directives/load-component.directive';
import { LoadComponentService } from './services/load-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(LoadComponentDirective, { static: true })
  loadComponentDirective: LoadComponentDirective;

  constructor(private loadComponentService: LoadComponentService) {

  }

  load() {
    const containerRef = this.loadComponentDirective.viewContainerRef;
    this.loadComponentService.loadComponent(containerRef)
  }
}
