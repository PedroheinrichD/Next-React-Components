"use client"
import { useState } from "react";
import Square from "./components/exercise/Square";

const Page = () => {
    const [show, setShow] = useState(false)

  return (
    <section className="p-6 mx-auto text-center space-y-4">
      <button className="p-2 mb-2 bg-red-400 text-white rounded " 
        onClick={() => {
            setShow(!show)           
        }}
      >
        Mostrar/Ocultar
      </button>

      {show && <Square />}
        
    </section>
  );
};

export default Page;
