// Arquivo: src/models/abstratas/Publicacao.ts

import { ItemAcervo } from "./ItemAcervo.js";

export abstract class Publicacao extends ItemAcervo {
  public codigoPublicacao: string;

  constructor(
    codigo: string,
    titulo: string,
    ano: number,
    estante: string,
    prateleira: string
  ) {
    super(titulo, ano, estante, prateleira);
    this.codigoPublicacao = codigo;
  }
}
