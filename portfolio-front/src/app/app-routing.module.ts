import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/education/edit-educacion.component';
import { NewEducacionComponent } from './components/education/new-educacion.component';
import { EditarExperienciaComponent } from './components/experience/editar-experiencia.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{path:'',component: HomeComponent},{path:'login', component: LoginComponent},
{path:'nuevaexperiencia', component: NewExperienceComponent},
{path:'editarExperiencia/:id', component: EditarExperienciaComponent},
{path:'nuevaeducacion', component: NewEducacionComponent},
{path:'editarEducacion/:id', component: EditEducacionComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
