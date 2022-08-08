import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciadorRoutingModule } from './gerenciador-routing.module';
import { GerenciadorComponent } from './gerenciador.component';


@NgModule({
  declarations: [GerenciadorComponent],
  imports: [
    CommonModule,
    GerenciadorRoutingModule
  ]
})
export class GerenciadorModule { }
