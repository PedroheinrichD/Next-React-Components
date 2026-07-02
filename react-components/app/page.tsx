"use client"

import { useState } from "react";

const Page = () => {

  const [count, setCount] = useState(0)

  function handleButton(){
    setCount(count + 2)
  }

  return (
    <section className="p-6 mx-auto text-center">
      <p className="text-3xl">{count}</p>
      <button
        className="py-2 px-4 rounded bg-sky-500 text-white cursor-pointer"
        onClick={handleButton}
      >
        +2
      </button>
    </section>
  );
};

export default Page;
