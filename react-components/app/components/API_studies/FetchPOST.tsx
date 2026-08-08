"use client";

import { useState } from "react";

export function FetchPOST() {
  const [titleValue, setTitleValue] = useState(""); // titulo do post
  const [bodyValue, setBodyValue] = useState(""); // corpo do post
  const [isLoading, setIsLoading] = useState(false); // loading
  const [message, setMessage] = useState(""); // feedback para o usuario

  async function blogPost() {
    // verificar se os campos estao vazios, inverte para true e entra na verificação caso o campo for vazio
    if (!titleValue.trim() || !bodyValue.trim()) {
      setMessage("Campos vazios!!, porfavor digite algo");
      return; // return serve para quebrar , tipo parar o resto da execução
    }

    setIsLoading(true);
    setMessage("");

    try {
      const newPost = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: titleValue,
            body: bodyValue,
            userId: 1,
          }),
        },
      );
      const resNewPost = await newPost.json();
      setMessage(`POST ENVIADO: titulo ->${resNewPost.title} body -> ${resNewPost.body}`)


      setTitleValue("") // limpa campos 
      setBodyValue("") // limpa campos
    } catch (error) {
      setMessage("falha na requisição");
    } finally {
        setIsLoading(false)
    }
  }

  return (
    <section className="px-8 mt-8">
      <div className="gap-2 flex flex-col">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="digite o titulo do post"
          className="border"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />

        <textarea
          placeholder="digite o conteúdo do post"
          className="border p-2 rounded h-24"
          value={bodyValue}
          onChange={(e) => setBodyValue(e.target.value)}
        />
      </div>
      <button
        className=" border p-2 m-5 bg-sky-400 text-white cursor-pointer"
        onClick={blogPost}
      >
        {isLoading ? 'Carregando...' : 'POST'}
      </button>
        {message && <p className="font-bold">{message}</p>}
    </section>
  );
}

/*
    EM UMA REQUISIÇÃO, PRECISAMOS TRATAR ERROS QUE PODEM ACONTECER,
    exemplos de erros:
    - campos vazios
    - falha na requisição URL
    - Mostrar loading para usuario
    - limpar campos de texto após o envio
*/
