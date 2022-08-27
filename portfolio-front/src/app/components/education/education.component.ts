import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educacion: Educacion[] = [];

  //AGREGAR EN EL CONSTRUCTOR private:tokenService: TokenService
  constructor(private educacionService: EducacionService) { }

  
    //isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    //Estp agregarlo con el token para validar
    // if(this.tokenService.getToken()){

    //   this.isLogged = true;
    // }else{
    //   this.isLogged = false;
    // }
  }

  cargarEducacion(): void {
    this.educacionService.lista().subscribe(data => {this.educacion = data} )
  }

  delete(id?: number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        }, error =>{
          alert("Error: no se puedo borrar la experiencia");
        }
      )
    }

  }
}
