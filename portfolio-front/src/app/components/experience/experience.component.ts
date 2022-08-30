import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiencia: Experiencia[] = [];

  //Falta agregar el tokens poner en constructor private tokenService: TokenService
  constructor(private experienciaService: ExperienciaService,private tokenService: TokenService ) { 

   
  }
  isLogged = false;
  ngOnInit(): void {
    this.cargarExperiencia();
    
    if(this.tokenService.getToken()){

      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(data => {this.experiencia = data} )
  }

  delete(id?: number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(
        data =>{
          this.cargarExperiencia();
        }, error =>{
          alert("Error: no se puedo borrar la experiencia");
        }
      )
    }

  }
  
}

