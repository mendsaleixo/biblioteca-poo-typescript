import { Livro } from "./models/concretas/Livro.js";
import { Revista } from "./models/concretas/Revista.js";

console.log("--- Sistema de Biblioteca ---");

// Criando instâncias (objetos reais) das nossas classes
const livroTS = new Livro(
  "L001",
  "TypeScript: Guia Definitivo",
  "João Coder",
  "978-3-16-148410-0",
  2022,
  "A1",
  "3"
);

const revistaJS = new Revista(
  "R001",
  "JavaScript Weekly",
  "Editora Web",
  157,
  2024,
  "B2",
  "1"
);

// Usando os métodos
livroTS.getDetalhes();
revistaJS.getDetalhes();

console.log("\n--- Simulação de Empréstimos ---");
livroTS.emprestar();
livroTS.emprestar();
livroTS.devolver();
