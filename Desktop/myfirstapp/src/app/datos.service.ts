import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {publicacion } from 'src/app/saludo/publicacion';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor( private httpCliente: HttpClient) {
console.log("The service is working! ")

   }

   getDatos(){
     return this.httpCliente.get<publicacion[]> ('https://jsonplaceholder.typicode.com/posts')
   }

}
