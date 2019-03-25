import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ConceptosService } from '../../services/conceptos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concepto',
  templateUrl: './concepto.component.html',
  styles: []
})
export class ConceptoComponent {

  concepto: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _conceptoService: ConceptosService,
              private router: Router
    ) {

        this.activatedRoute.params.subscribe( params => {
            this.concepto = this._conceptoService.getConcepto (params ['id'] );
        });
  }
  regresarContenidos() {
    // console.log('Ha hecho clic');
    this.router.navigate(  ['/contenidos'] );

  }
}
