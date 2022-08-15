export class Produto {
  nome: string;
  descricao: string;
  composicao: string;
  quantidadeDisponivel: number;
  preco: number;
  profundidade: number;
  altura: number;
  largura: number;
  categoriaId: string;
  imagens: File[];
  efeitos: string[];
  informacaoNutricional: InformacaoNutricional;
}

export class InformacaoNutricional {
  cabecalho: string;
  legenda: string;
  compostosNutricionais: CompostoNutricional[];
}

export class CompostoNutricional {
  composto: string;
  porcao: string;
  valorDiario: string;
}
