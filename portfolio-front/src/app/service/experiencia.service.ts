import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaURL = "http://localhost:8080/experienciaLaboral/"
  constructor(private HttpClient: HttpClient) { }
  public lista(): Observable<Experiencia[]>{

    return this.HttpClient.get<Experiencia[]>(this.experienciaURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{

    return this.HttpClient.get<Experiencia>(this.experienciaURL +`detail/${id}` )
  }

  public save(experiencia: Experiencia): Observable<any>{

    return this.HttpClient.post<any>(this.experienciaURL +'create', experiencia);

  }

  public update(id: number ,experiencia: Experiencia ): Observable<any>{

    return this.HttpClient.put<any>(this.experienciaURL + `update/${id}`, experiencia);

  }

  public delete(id: number): Observable<any>{

    return this.HttpClient.delete<any>(this.experienciaURL+`delete/${id}`);
  }


  
}
