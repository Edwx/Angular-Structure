import { Component, OnInit, ViewChild, Input } from '@angular/core';

// tslint:disable: use-lifecycle-interface
// tslint:disable:no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input('entrada') entrada: any;
  @ViewChild('view', {static: false}) view: any;

  title = 'angular-structure';

  constructor() {
    console.log('constructor - home'); // al crear el componente
   }

  ngOnChanges() {
    console.log('ngOnChanges - home'); // ejecuta cambios en inputs (si es que hay algún dato de entrada)
  }

  ngOnInit() {
    console.log('ngOnInit - home'); // al iniciarlizar el componente
  }

  ngDoCheck() {
    console.log('ngDoCheck - home'); // Detecta si hay cambios en el componente
  }


  // ----------------- //
  ngAfterContentInit() {
    console.log('ngAfterContentInit - home'); // Se ejecuta al proyectar el contenido
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked - home'); // Se ejecuta al confirmar el contenido proyectado
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - home'); // Se ejecuta al cargar las View y ViewChild
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked - home'); // Se ejecuta al confirmar la carga de las View y ViewChild
  }
  // ----------------- //

  ngOnDestroy() {
    console.log('ngOnDestroy - home'); // al destruir el componente
  }

}
