import { TableComponent } from '../table/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsuarioComponent,
    TableComponent
  ]
})
export class UsuarioModule { }
