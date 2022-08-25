import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiencia: Experiencia[] = [];

  //Falta agregar el tokens poner en constructor private tokenService: TokenService
  constructor(private experienciaService: ExperienciaService, ) { 

    //isLogged = false;
  }

  ngOnInit(): void {
    this.cargarExperiencia();
    //Estp agregarlo con el token para validar
    // if(this.tokenService.getToken()){

    //   this.isLogged = true;
    // }else{
    //   this.isLogged = false;
    // }
  }

  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(data => {this.experiencia = data} )
  }
  
}

