import { Publicacao } from "../abstratas/Publicacao.js";

export class Livro extends Publicacao {
  private autor: string;
  private isbn: string;

  constructor(
    codigo: string,
    titulo: string,
    autor: string,
    isbn: string,
    ano: number,
    estante: string,
    prateleira: string
  ) {
    super(codigo, titulo, ano, estante, prateleira);
    this.autor = autor;
    this.isbn = isbn;
  }

  public getDetalhes(): void {
    console.log("--- Detalhes do Livro ---");
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`ISBN: ${this.isbn}`);
    console.log(`Ano de Publicação: ${this.anoPublicacao}`);
    console.log(
      `Localização: Estante ${this.localizacao.estante}, Prateleira ${this.localizacao.prateleira}`
    );
    console.log(`Disponível: ${this.emprestado ? "Não" : "Sim"}`);
    console.log("-------------------------");
  }
}
