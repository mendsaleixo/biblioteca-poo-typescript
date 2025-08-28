import type { ILocalizavel } from "../../interfaces/ILocalizavel.js";

export abstract class ItemAcervo implements ILocalizavel {
  public titulo: string;
  public anoPublicacao: number;
  public emprestado: boolean = false;
  public localizacao: { estante: string; prateleira: string };

  constructor(
    titulo: string,
    ano: number,
    estante: string,
    prateleira: string
  ) {
    this.titulo = titulo;
    this.anoPublicacao = ano;
    this.localizacao = { estante, prateleira };
  }

  emprestar(): void {
    if (!this.emprestado) {
      this.emprestado = true;
      console.log(`"${this.titulo}" foi emprestado com sucesso.`);
    } else {
      console.log(`"${this.titulo}" já se encontra emprestado.`);
    }
  }

  devolver(): void {
    if (this.emprestado) {
      this.emprestado = false;
      console.log(`"${this.titulo}" foi devolvido.`);
    } else {
      console.log(`"${this.titulo}" já estava disponível no acervo.`);
    }
  }

  abstract getDetalhes(): void;
}
