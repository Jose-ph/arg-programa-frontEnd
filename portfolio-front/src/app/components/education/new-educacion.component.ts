import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEducacion: string = "";
  descripcionEducacion: string = "";

  constructor(private educacionService: EducacionService, private router: Router) { }



  ngOnInit(): void {
  }

  
  onCreate(): void {
    const educacion = new Educacion(this.nombreEducacion, this.descripcionEducacion);
    this.educacionService.save(educacion).subscribe(
      data => {
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
