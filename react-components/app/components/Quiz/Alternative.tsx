import { Question } from "@/types/Question";
import { useState } from "react";

type AlternativeProps = {
  question: Question;
};

export function Alternative({ question }: AlternativeProps) {
  const [Altselecionada, setAltSelecionada] = useState<string | null>(null);

  function isCorret(alternativa: string) {
    setAltSelecionada(alternativa);
  }

  return (
    <section>
      <div className="flex flex-col gap-3">
        {question.alternativas.map((alternativa, index) => (
          <button
            key={index}
            onClick={() => isCorret(alternativa)}
            className={`w-full rounded-lg border px-4 py-3 text-left text-sm ${
              alternativa === Altselecionada
                ? alternativa === question.respostaCorreta
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-red-500 bg-red-50 text-red-700"
                : "border-gray-200 text-gray-700 hover:border-indigo-400 hover:bg-indigo-50"
            }`}
          >
            {alternativa}
          </button>
        ))}
      </div>
    </section>
  );
}
