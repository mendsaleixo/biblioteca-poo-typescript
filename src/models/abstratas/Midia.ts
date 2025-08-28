import { ItemAcervo } from "./ItemAcervo.js";

export abstract class Midia extends ItemAcervo {
  public duracaoMinutos: number;

  constructor(
    titulo: string,
    ano: number,
    estante: string,
    prateleira: string,
    duracao: number
  ) {
    super(titulo, ano, estante, prateleira);
    this.duracaoMinutos = duracao;
  }
}
