import { Component, OnInit, Input } from '@angular/core';
import { DatosService} from 'src/app/datos.service';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
 @Input () usuario;
 publicaciones =[];
  usuarios: string[] =['Camiloot','Joe','Yugi'];

  nombre: string;
  edad: number ;

constructor(private datosService : DatosService){
  
this.datosService.getDatos().subscribe(datos => {

  this.publicaciones = datos;
})
 
}

  eliminarUsuario (usuario){
    for (let index = 0; index < this.usuarios.length; index++) {
      if(usuario== this.usuarios[index]){
        this.usuarios.splice(index,1 );
      }

    }
  }
  agregarUsuario(nuevoUsuario){
    if (nuevoUsuario.value== "") {
      alert("Porfavor ingrese el campo");
    }
    else
this.usuarios.push(nuevoUsuario.value);
nuevoUsuario.value='';
nuevoUsuario.focus();

  return false;  
  }

 
   

  ngOnInit(): void {
  }

}
