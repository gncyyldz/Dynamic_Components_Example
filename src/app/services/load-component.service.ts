import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadComponentService {
  //ViewContainerRef : Dinamik olarak yüklenecek bileşeni barındıran container'ı temsil eder. Her dinamik yüklemede önceki view'leri clear etmemiz gerekmektedir.

  //Directive ile dinamik yüklenecek component'i hangi ViewContainerRef içerisine yükleyeceğimizi belirliyoruz.

  constructor() { }

  async loadComponent(viewContainerRef: ViewContainerRef) {
    const { ExampleComponent } = await import("../example/example.component");

    viewContainerRef.clear();
    let component: any = ExampleComponent;
    return viewContainerRef.createComponent(component);
  }
}
