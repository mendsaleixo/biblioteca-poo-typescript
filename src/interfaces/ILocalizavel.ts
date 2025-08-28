// Este contrato define a "capacidade" de um objeto ter uma localização.
// Qualquer classe que implementar esta interface será OBRIGADA a ter
// uma propriedade 'localizacao' com esta estrutura.

export interface ILocalizavel {
  localizacao: {
    estante: string;
    prateleira: string;
  };
}
