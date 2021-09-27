import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuario', pathMatch: 'full'},

  { path: 'usuario', component: UsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
