import { Midia } from "../abstratas/Midia.js";

export class DVD extends Midia {
  private diretor: string;
  private genero: string;

  constructor(
    titulo: string,
    diretor: string,
    genero: string,
    ano: number,
    duracao: number,
    estante: string,
    prateleira: string
  ) {
    super(titulo, ano, estante, prateleira, duracao);
    this.diretor = diretor;
    this.genero = genero;
  }

  public getDetalhes(): void {
    console.log("--- Detalhes do DVD ---");
    console.log(`Título: ${this.titulo} (${this.genero})`);
    console.log(`Diretor: ${this.diretor}`);
    console.log(`Duração: ${this.duracaoMinutos} minutos`);
    console.log(`Ano de Lançamento: ${this.anoPublicacao}`);
    console.log(
      `Localização: Estante ${this.localizacao.estante}, Prateleira ${this.localizacao.prateleira}`
    );
    console.log(`Disponível: ${this.emprestado ? "Não" : "Sim"}`);
    console.log("-----------------------");
  }
}
