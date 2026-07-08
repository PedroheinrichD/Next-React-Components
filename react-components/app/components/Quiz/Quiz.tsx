"use client";

import { Questions } from "@/data/Questions"; // lista de perguntas
import { Alternative } from "./Alternative";
import { useState } from "react";

function Quiz() {
  const [indiceAtual, setIndiceAtual] = useState(10);

  const perguntaAtual = Questions[indiceAtual];

  function proximaPergunta() {
    setIndiceAtual(indiceAtual + 1);
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
            Questions.map((item) => (
              <div key={item.id}
              className=" text-left text-sm"
              >
                {item.pergunta}
                <div>
                  <p className="text-gray-500">- {item.respostaCorreta} </p>
                </div>
              </div>
            ))
          ) : (
            <Alternative
              question={perguntaAtual}
              proximaPergunta={proximaPergunta}
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

export default Quiz;
