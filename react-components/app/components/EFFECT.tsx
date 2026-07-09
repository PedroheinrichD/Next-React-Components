"use client";

import { useEffect, useState } from "react";

const Effect = () => {
  const [age, setAge] = useState(20);
  
  function toggleAge() {
    setAge(99)
  }

  // O Effect fica monitorando o state age, toda vez que ele muda(renderizar novamente) , chama tal configuração(função)
  useEffect(() => {
    alert('IDADE MUDANDO!') // função para que quando age for renderizado novamente, lança um alert
  }, [age])

  return (
    <section>
      <button className="p-2 mb-2 bg-sky-400 text-white rounded " 
      onClick={toggleAge}
      >
        Mudar idade
      </button>

    <p>Sua idade é: {age}</p>


    </section>
  );
};

export default Effect;
