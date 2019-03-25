import { NgModule } from '@angular/core';

import {  Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConceptosComponent } from './pages/conceptos/conceptos.component';
import { ConceptoComponent } from './pages/concepto/concepto.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'conceptos',
    component: ConceptosComponent
  },
  {
    path: 'concepto/:id',
    component: ConceptoComponent
  },
  {
    path: 'posts',
    loadChildren: './pages/posts/posts.module#PostsModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
