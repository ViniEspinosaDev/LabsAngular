import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiService } from './../../shared/services/api.service';
import { AutenticacaoService } from './autenticacao.service';

import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { AutenticacaoComponent } from './autenticacao.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';


@NgModule({
  declarations: [AutenticacaoComponent, LoginComponent, NaoEncontradoComponent],
  imports: [
    CommonModule,
    AutenticacaoRoutingModule,
    HttpClientModule
  ],
  providers: [AutenticacaoService, ApiService]
})
export class AutenticacaoModule { }
