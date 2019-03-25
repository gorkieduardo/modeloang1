import { Component, OnInit } from '@angular/core';
import { ConceptosService, Concepto} from '../../services/conceptos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.component.html',
  styles: []
})
export class ConceptosComponent implements OnInit {

  conceptos: Concepto [] = [];

  constructor(private _conceptosServicios: ConceptosService,
              private router: Router) {

              }

  ngOnInit() {
    this.conceptos = this._conceptosServicios.getConceptos();
    // console.log( this.conceptos);
  }

  verConcepto( idx: number ) {
    this.router.navigate( ['/concepto', idx] );
  }
}

