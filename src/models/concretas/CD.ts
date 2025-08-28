import { Midia } from "../abstratas/Midia.js";

export class CD extends Midia {
  private artista: string;
  private numeroDeFaixas: number;

  constructor(
    titulo: string,
    artista: string,
    faixas: number,
    ano: number,
    duracao: number,
    estante: string,
    prateleira: string
  ) {
    super(titulo, ano, estante, prateleira, duracao);
    this.artista = artista;
    this.numeroDeFaixas = faixas;
  }

  public getDetalhes(): void {
    console.log("--- Detalhes do CD ---");
    console.log(`Título: ${this.titulo} - Artista: ${this.artista}`);
    console.log(`Número de Faixas: ${this.numeroDeFaixas}`);
    console.log(`Duração: ${this.duracaoMinutos} minutos`);
    console.log(`Ano de Lançamento: ${this.anoPublicacao}`);
    console.log(
      `Localização: Estante ${this.localizacao.estante}, Prateleira ${this.localizacao.prateleira}`
    );
    console.log(`Disponível: ${this.emprestado ? "Não" : "Sim"}`);
    console.log("----------------------");
  }
}
