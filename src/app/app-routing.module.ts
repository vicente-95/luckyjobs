import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibroComponent } from './libro/libro.component';
import { RegistroLibroComponent } from './registro-libro/registro-libro.component';


const routes: Routes = [
  { path: 'libro', component: LibroComponent },
  { path: 'registro-libro', component: RegistroLibroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
