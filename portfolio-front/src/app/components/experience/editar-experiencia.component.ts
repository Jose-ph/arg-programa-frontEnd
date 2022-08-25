import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experienciaLaboral: Experiencia =  null;

  constructor(private experienciaService: ExperienciaService, private activatedRoute: ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      
      data=>{
      
      this.experienciaLaboral = data
    }, error =>{alert("Error:No se puede modificar");
    this.router.navigate(['']);
      }
    
    
    
    )
  }

  onUpdate():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.update(id,this.experienciaLaboral).subscribe(data=> {this.router.navigate([''])},
     error => {alert("Error: No se puede modificar");
      this.router.navigate([''])
    })
  }

}
