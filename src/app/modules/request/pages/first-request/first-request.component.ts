import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-first-request',
  templateUrl: './first-request.component.html',
  styleUrls: ['./first-request.component.css']
})
export class FirstRequestComponent implements OnInit {

  lista = [
    {name: 'Elemento 1'},
    {name: 'Elemento 2'},
    {name: 'Elemento 3'},
    {name: 'Elemento 4'}
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.listen("document", "click", (e) => {
      console.log(`(x, y): (${e.clientX}, ${e.clientY})`);
    });
  }

}
