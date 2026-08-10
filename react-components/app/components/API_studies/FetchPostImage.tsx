"use client";

import { useRef, useState } from "react";

export function FetchPostImage() {
  const [InputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  async function handlePost() {
    if (fileRef.current?.files && fileRef.current?.files?.length > 0) {
      const fileItem = fileRef.current.files[0]; // pegando o primeiro item
      const typeFile = ["image/png", "image/jpeg"];

      if (typeFile.includes(fileItem.type)) {
        setIsLoading(true);

        const data = new FormData(); // caixa que aceita texto + arquivo
        data.append("image", fileItem); // coloca item na caixa com etiqueta
        data.append("legenda", InputValue);

        try {
          // a url da req é um exemplo, ela nao funciona de verdade
          const req = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
              method: "POST",
              headers: {}, // Não coloca Content-Type quando envia FormData — o navegador faz sozinho.
              body: data,
            },
          );
          const res = await req.json();
        } catch {
          setError("Falha na requisição");
        } finally {
          setIsLoading(false);
        }
      } else {
        setError("Tipo de arquivo não permitido. Use PNG ou JPEG.");
      }
    }
  }

  return (
    <section>
      <div className="flex flex-col gap-2 border p-2 m-auto max-w-md">
        <input type="file" ref={fileRef} />
        <input
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          name="text"
          id="text"
          placeholder="legenda da imagem"
          className="border border-gray-600 pl-2"
        />
        <button onClick={handlePost}>Enviar</button>
      </div>
    </section>
  );
}
