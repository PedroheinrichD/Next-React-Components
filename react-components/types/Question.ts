export type Question = {
  id: number;
  pergunta: string;
  alternativas: [string, string, string, string];
  respostaCorreta: string;
};

export type UsuarioResposta = {
  pergunta: string;
  resposta: string | null;
  respostaCorreta: string
}