import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciadorComponent } from './gerenciador.component';

const routes: Routes = [{ path: '', component: GerenciadorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciadorRoutingModule { }
