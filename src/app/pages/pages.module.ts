import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { ConceptoComponent } from './concepto/concepto.component';
import { KatexModule } from 'ng-katex';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ConceptosComponent,
    ConceptoComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    KatexModule
  ]
})
export class PagesModule { }
