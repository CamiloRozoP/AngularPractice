import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms';
import {RouterModule, Route} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { UsuarioComponent } from './usuario/usuario.component';


import { DatosService} from './datos.service';
import { HolamundoComponent } from './holamundo/holamundo.component';
const rutas: Route[] =[
{path: '', component: SaludoComponent },
{path: 'about', component: HolamundoComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    UsuarioComponent,
    HolamundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
