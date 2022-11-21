import { ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appLoadComponent]'
})
export class LoadComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
