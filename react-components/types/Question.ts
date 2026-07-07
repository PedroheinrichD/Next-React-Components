export type Question = {
  id: number;
  pergunta: string;
  alternativas: [string, string, string, string];
  respostaCorreta: string;
};
