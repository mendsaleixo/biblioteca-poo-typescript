import { ItemAcervo } from "./abstratas/ItemAcervo.js";

export class Biblioteca {
  private acervo: ItemAcervo[] = [];

  public adicionarItem<T extends ItemAcervo>(item: T): void {
    this.acervo.push(item);
    console.log(`"${item.titulo}" foi adicionado ao acervo da biblioteca.`);
  }

  public listarAcervo(): void {
    console.log("\n--- Acervo da Biblioteca ---");
    if (this.acervo.length === 0) {
      console.log("O acervo está vazio.");
      return;
    }

    this.acervo.forEach((item) => {
      item.getDetalhes();
    });
  }
}
