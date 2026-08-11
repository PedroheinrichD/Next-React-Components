import axios from "axios"

export function AxiosExample() {
    // exemplo de uso do axios para fazer uma requisição GET
    async function handleGetRequest() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params: {
                userId: 1
            }
        })
        console.log(res.data) // em data fica a resposta da requisição, no caso, um array de posts do usuário com id 1
    }
    // se não quiser usar params, pode fazer a requisição com a url normal, parametros nao sao obrigatorios, mas podem ser uteis dependendo do caso

    return (
        <div>
            <h1>Exemplo de uso do Axios</h1>
            <button 
            onClick={handleGetRequest}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Fazer requisição GET
            </button>
        </div>
    )
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
