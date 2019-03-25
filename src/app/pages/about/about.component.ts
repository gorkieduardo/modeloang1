import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 public equation: String;
 public titulo: String;
  constructor() {

    this.titulo = 'El Valor Futuro de una función es: ';
    this.equation = 'VF = P(1+i)^n';

  }


  ngOnInit() {




  }

}
