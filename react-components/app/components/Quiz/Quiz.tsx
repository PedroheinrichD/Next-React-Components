"use client";

import { Questions } from "@/data/Questions"; // lista de perguntas
import { Alternative } from "./Alternative";

function Quiz() {
  return (
    <>
      {Questions.map((item) => (
        <div
          key={item.id}
          className="fixed inset-0 flex items-center justify-center bg-black/50"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              {item.pergunta}
            </h2>

                <Alternative question={item} />

          </div>
        </div>
      ))}
    </>
  );
}

export default Quiz;
