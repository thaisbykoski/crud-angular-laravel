export class Book {
  id: number;
  nome: string;
  autor: string;
  categoria: string;
  valor: number;
  quantidadeEstoque: number;

  constructor(
    id: number,
    nome: string,
    autor: string,
    categoria: string,
    valor: number,
    quantidadeEstoque: number,
  ) {
    this.id = id;
    this.nome = nome;
    this.autor = autor;
    this.categoria = categoria;
    this.valor = valor;
    this.quantidadeEstoque = quantidadeEstoque;
  }
}
