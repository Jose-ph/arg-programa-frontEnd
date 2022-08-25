import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {
  nombreExperiencia: string = "";
  descripcionExperiencia: string = "";

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const experiencia = new Experiencia(this.nombreExperiencia, this.descripcionExperiencia);
    this.experienciaService.save(experiencia).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }




}
