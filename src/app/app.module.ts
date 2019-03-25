import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { PagesModule } from './pages/pages.module';
import { ConceptosComponent } from './pages/conceptos/conceptos.component';
import { ConceptosService} from './services/conceptos.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    // ConceptosComponent,
    // ConceptoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [
    ConceptosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
