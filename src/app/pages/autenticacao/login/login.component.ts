import { Produto, CompostoNutricional, InformacaoNutricional } from './../models/Produto';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from './../autenticacao.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  imagem: File;

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  aoEscolherArquivo(evento: any): void {
    this.imagem = <File>evento.target.files[0];
  }

  salvarProduto(): void {
    let compostosNutricionais: CompostoNutricional[] = [
      { composto: 'Bomba', porcao: 'Camarão', valorDiario: '1kg' },
      { composto: 'Peito', porcao: 'Figado', valorDiario: '2kg' },
      { composto: 'Perna', porcao: 'Mão', valorDiario: '3kg' },
    ]

    let informacaoNutricional: InformacaoNutricional = {
      cabecalho: 'Cabecão',
      legenda: 'Legenda',
      compostosNutricionais: compostosNutricionais
    }

    let produto: Produto = {
      nome: 'Produto 1',
      descricao: 'Descrição',
      composicao: 'Composicao',
      quantidadeDisponivel: 12,
      preco: 12.50,
      profundidade: 1,
      altura: 1,
      largura: 2,
      categoriaId: '8a11a207-806b-4381-a66d-312380079800',
      imagens: [this.imagem],
      efeitos: ['ce648c1c-c4be-42be-a523-1d3eb73e531c', 'a6e4f847-ae7d-4d82-84d4-74e5fcaa8057', 'fd02f052-3595-4609-8b5b-7a92fb653454'],
      informacaoNutricional: informacaoNutricional
    }

    this.autenticacaoService.salvarProduto(produto).subscribe(result => {
      console.log('Sucesso: ', result)
    }, error => {
      console.log('Erro: ', error)
    })
  }
}
