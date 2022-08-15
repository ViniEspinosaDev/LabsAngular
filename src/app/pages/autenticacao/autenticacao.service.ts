import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from './../../shared/services/api.service';
import { Produto } from './models/Produto';

@Injectable({
  providedIn: "root"
})
export class AutenticacaoService {

  urlDominio: string;

  constructor(private apiService: ApiService) {
    this.urlDominio = 'https://supleeapiv1.herokuapp.com';
    //this.urlDominio = 'https://localhost:5001';
  }

  public salvarProduto(produto: Produto): Observable<any> {
    let url = `${this.urlDominio}/api/Catalogo/produto`;

    let formData = new FormData();

    formData.append("nome", produto.nome);
    formData.append("descricao", produto.descricao);
    formData.append("composicao", produto.composicao);
    formData.append("quantidadeDisponivel", produto.quantidadeDisponivel.toString());
    formData.append("preco", produto.preco.toString());
    formData.append("profundidade", produto.profundidade.toString());
    formData.append("altura", produto.altura.toString());
    formData.append("largura", produto.largura.toString());
    formData.append("categoriaId", produto.categoriaId);

    produto.imagens.forEach((image) => {
      formData.append("imagens", image);
    });

    produto.efeitos.forEach((efeito, i) => {
      formData.append(`efeitos[${i++}]`, efeito);
    });

    formData.append("informacaoNutricional.cabecalho", produto.informacaoNutricional.cabecalho);
    formData.append("informacaoNutricional.legenda", produto.informacaoNutricional.legenda);

    produto.informacaoNutricional.compostosNutricionais.forEach((composto, i) => {
      formData.append(`informacaoNutricional.compostosNutricionais[${i}].composto`, composto.composto);
      formData.append(`informacaoNutricional.compostosNutricionais[${i}].porcao`, composto.porcao);
      formData.append(`informacaoNutricional.compostosNutricionais[${i}].valorDiario`, composto.valorDiario);
      i++;
    });

    return this.apiService.postAttachment(url, formData)
      .pipe(
        map(res => res.data),
        catchError(error => throwError(error)));
  }
}
