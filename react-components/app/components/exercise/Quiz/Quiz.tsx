"use client";

import { Questions } from "@/data/Questions"; // lista de perguntas
import { Alternative } from "./Alternative";
import { useState } from "react";
import { UsuarioResposta } from "@/types/Question";

function Quiz() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostas, setRespostas] = useState<UsuarioResposta[]>([]);

  const perguntaAtual = Questions[indiceAtual];

  function proximaPergunta() {
    setIndiceAtual(indiceAtual + 1);
  }

  function respostaFinal(Altselecionada: string | null) {
    setRespostas([
      ...respostas,
      { pergunta: perguntaAtual.pergunta, resposta: Altselecionada, respostaCorreta: perguntaAtual.respostaCorreta }
    ]);
  }
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            {indiceAtual >= Questions.length
              ? `Perguntas respondidas: ${Questions.length}`
              : perguntaAtual.pergunta}
          </h2>

          <div className="flex flex-col gap-4">
            {indiceAtual >= Questions.length ? (
              respostas.map((item, index) => (
                <div key={index}
                  className=" text-left text-sm"
                >
                  {item.pergunta}
                  <div>
                    <p className="text-gray-500 ml-2 space-x-7">Resposta certa: {item.respostaCorreta} -
                      <span
                        className={item.resposta === item.respostaCorreta ? `bg-green-500 text-white m-2 p-0.5 rounded` : `bg-red-500 text-white m-2 p-0.5 rounded`}>
                          {item.resposta === item.respostaCorreta ? `Acertou` : `Errou`}
                        </span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <Alternative
                question={perguntaAtual}
                proximaPergunta={proximaPergunta}
                respostaFinal={respostaFinal}
              />
            )}
          </div>
          <br />

          {`${indiceAtual} de ${Questions.length}`}
        </div>
      </div>
    </>
  );
}

/*
{respostas.map((item, index) => (
                        <span
                        className={respostas[index].resposta === respostas[index].respostaCorreta ? `bg-green-500` : `bg-red-500`}>porra</span>
                      ))}
*/

export default Quiz;
