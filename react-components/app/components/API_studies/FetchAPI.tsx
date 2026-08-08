'use client'
import { User } from "@/types/User";
import { useEffect, useState } from "react";

export function FetchAPI() {
  const [user, setUser] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false;

    async function fetchUser() {
      try {
        const req = await fetch("https://jsonplaceholder.typicode.com/users");
        const res = await req.json();
        if (!cancelled) setUser(res); 
      } catch (error) {
        if (!cancelled) setError("Erro ao buscar usuários" ); 
      } finally {
        if (!cancelled) setIsLoading(false); 
      }
    }

    fetchUser();
    return () => { cancelled = true }; // limpeza caso o componente fechar 
  }, []);

  if (isLoading) return <p>Carregando...</p>; 
  if (error) return <p className="text-red-500">{error}</p>;
  if (user.length === 0) return <p>Sem usuários para exibir</p>;

  return (
    <>
      <h1 className="text-2xl font-bold">Lista de usuários</h1>
      <ul>
        {user.map((item) => (
          <li key={item.id} className="ml-4">
            - {item.name} <strong>endereço:</strong> {item.address.street}
          </li>
        ))}
      </ul>
    </>
  );
}


/*
  Método POST
  - criar função async 
  - fazer requisição e esperar a resposta
  - segundo parametro do fetch é um objeto que definimos valores
  - dentro do segundo parametro dizer os seguintes valores:
    -- method: '' 
    -- headers: {
      'Content-type': 'application/json'
    } 
    -- body: JSON.stringify({
      title: 'título do meu post do blog'
      body: 'conteudo de texto do blog'
    })
*/