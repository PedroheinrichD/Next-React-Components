"use client"

import { useState } from "react";

const Page = () => {
  //     var    mudarValor   valorInicial
  const [showMsg, setShowMsg] = useState(false)

  function handleClickButton() {
    // pega o valor atual de showMsg e passa o oposto dele , se for false vira true se for true vira false
    setShowMsg(!showMsg) // basicamente é um toggle
  }

  return (
    <section className="mx-auto max-w-sm mt-10 p-8 text-center bg-white rounded-xl shadow-md space-y-4">
      <button
        onClick={handleClickButton}
        className="bg-sky-400 text-white p-2 rounded-md cursor-pointer"
      >
        {showMsg ? 'Ocultar' : 'Mostrar'}
      </button>
      {
        showMsg &&
        <div>
          <p className="bg-red-600 text-white p-2 rounded-md">Mensagem escondida</p>
        </div>
      }
    </section>
  );
};

export default Page;
