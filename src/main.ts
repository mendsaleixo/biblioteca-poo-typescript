import { Livro } from "./models/concretas/Livro.js";
import { Revista } from "./models/concretas/Revista.js";
import { CD } from "./models/concretas/CD.js";
import { DVD } from "./models/concretas/DVD.js";

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

const cdMusical = new CD(
  "Album de Rock",
  "Banda Famosa",
  12,
  2005,
  60,
  "C3",
  "2"
);

const dvdFilme = new DVD(
  "Uma Aventura no Espaço",
  "Diretor Conhecido",
  "Ficção Científica",
  2018,
  120,
  "C3",
  "4"
);

// Usando os métodos
livroTS.getDetalhes();
revistaJS.getDetalhes();
cdMusical.getDetalhes();
dvdFilme.getDetalhes();

console.log("\n--- Simulação de Empréstimos ---");
livroTS.emprestar();
livroTS.emprestar();
livroTS.devolver();
