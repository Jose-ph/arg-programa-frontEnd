import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExperienciaComponent } from './components/experience/editar-experiencia.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{path:'',component: HomeComponent},{path:'login', component: LoginComponent},{path:'nuevaexperiencia', component: NewExperienceComponent},{path:'editarExperiencia/:id', component: EditarExperienciaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
