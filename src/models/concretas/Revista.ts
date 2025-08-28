// Arquivo: src/models/concretas/Revista.ts

import { Publicacao } from "../abstratas/Publicacao.js";

export class Revista extends Publicacao {
  private editora: string;
  private edicao: number;

  constructor(
    codigo: string,
    titulo: string,
    editora: string,
    edicao: number,
    ano: number,
    estante: string,
    prateleira: string
  ) {
    super(codigo, titulo, ano, estante, prateleira);
    this.editora = editora;
    this.edicao = edicao;
  }

  // Implementação OBRIGATÓRIA, mas com lógica própria (Polimorfismo)
  public getDetalhes(): void {
    console.log("--- Detalhes da Revista ---");
    console.log(`Título: ${this.titulo}`);
    console.log(`Editora: ${this.editora}, Edição: ${this.edicao}`);
    console.log(`Ano de Publicação: ${this.anoPublicacao}`);
    console.log(
      `Localização: Estante ${this.localizacao.estante}, Prateleira ${this.localizacao.prateleira}`
    );
    console.log(`Disponível: ${this.emprestado ? "Não" : "Sim"}`);
    console.log("--------------------------");
  }
}
