import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { publicacion } from '../saludo/publicacion';

@Component({
  selector: 'app-holamundo',
  templateUrl: './holamundo.component.html',
  styleUrls: ['./holamundo.component.css']
})
export class HolamundoComponent implements OnInit {
  publicaciones: publicacion[];
  constructor(private dataService:DatosService) { 
    this.dataService.getDatos().subscribe(datos=>{
       this.publicaciones = datos;
    })

  }

  ngOnInit(): void {
  }

}
