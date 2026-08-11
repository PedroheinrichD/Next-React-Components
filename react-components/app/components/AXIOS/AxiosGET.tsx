import { api } from "@/utils/api";
import { useRef, useState } from "react";

export function AxiosGET() {
  const [error, setError] = useState("")
  const controllerRef = useRef<AbortController | null>(null) // usando como ref para guardar o valor quando re-renderizar 
  
  // exemplo de uso do axios para fazer uma requisição GET
  async function handleGetRequest() {
    if(controllerRef.current){ // Se existe uma requisição anterior rodando, cancela ela
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();  // é um recurso do proprio fetch API para cancelar requisições
    try { 
      const res = await api.get("/posts", {
        params: {
          userId: 1,
        },
        signal: controllerRef.current?.signal, // associando o meu controlador ao sinal da requisição
      });
      console.log(res.data); // em data fica a resposta da requisição, no caso, um array de posts do usuário com id 1
    } catch {
      setError('requisição falhou')
    }
  }
  // se não quiser usar params, pode fazer a requisição com a url normal, parametros nao sao obrigatorios, mas podem ser uteis dependendo do caso

  function handleCancelRequest() {
    controllerRef.current?.abort();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>Exemplo de uso do Axios</h1>

      {/*GET*/}
      <button
        onClick={handleGetRequest}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Fazer requisição GET
      </button>
      <p className="text-red-500">{error}</p>

      <button className="border p-2" onClick={handleCancelRequest}>
        Cancelar requisição GET
      </button>
    </div>
  );
}

/*
    axios é uma biblioteca para fazer requisições HTTP em JavaScript, 
    especialmente em aplicações React. Ele simplifica o processo de enviar
    requisições e lidar com respostas, oferecendo uma API fácil de usar.

    segundo parametro do axios.get é um objeto de configuração que permitie definir parametros, headers, timout,
    entre outros. no exemplo acima, estamos usando a propriedade params para enviar um parametro userId com valor
    1 na requisição GET. Isso é útil quando você precisa enviar dados adicionais para o servidor, como filtros ou
    informações de autenticação. O axios irá automaticamente serializar esses parametros na URL da requisição.
*/
