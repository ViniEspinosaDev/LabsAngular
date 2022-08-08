import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoComponent } from './pages/autenticacao/autenticacao.component';
import { NaoEncontradoComponent } from './pages/autenticacao/nao-encontrado/nao-encontrado.component';
import { GerenciadorComponent } from './pages/gerenciador/gerenciador.component';

const routes: Routes = [
  { path: '', redirectTo: 'autenticacao/login', pathMatch: 'full' },
  {
    path: 'autenticacao',
    component: AutenticacaoComponent,
    loadChildren: () => import('./pages/autenticacao/autenticacao.module').then(m => m.AutenticacaoModule)
  },
  {
    path: 'gerenciador',
    component: GerenciadorComponent,
    loadChildren: () => import('./pages/gerenciador/gerenciador.module').then(m => m.GerenciadorModule)
  },
  { path: '**', component: NaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
