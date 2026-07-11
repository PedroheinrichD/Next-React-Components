"use client";

import { ListReducer } from "@/Reducers/ListReducer";
import { useReducer } from "react";

const Page = () => {
  // quase a mesma coisa do useState, useReducer(função que fizemos, valor inicial)
  const [list, dispatch] = useReducer(ListReducer, []);

  function handleButton() {
    dispatch({
      type: "add", // tipo de ação que está disparando
      payload: {
        text: "Adicionando novo texto",
      },
    });
  }

  return (
    <section className="p-6 mx-auto text-center space-y-4">
      <button onClick={handleButton}>clique</button>
      {list.map((list) => {
       return <p  key={list.id} >{list.text}</p>
      })}
    </section>
  );
};

export default Page;
