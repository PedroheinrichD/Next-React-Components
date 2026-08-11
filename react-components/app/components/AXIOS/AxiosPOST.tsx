import axios from "axios"

export function AxiosPOST() {
    // exemplo de uso do axios para fazer uma requisição GET
    async function handlePOSTRequest() {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'Meu novo post',
            body: 'Conteúdo do meu novo post',
            userId: 1
        }) // segundo parametro do axios.post é o corpo da requisição, que é um objeto com os dados que queremos enviar para o servidor
        console.log(res.data) 
}

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {/*POST*/}
             <button
                onClick={handlePOSTRequest}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Fazer requisição POST
            </button>
        </div>
    )
}
// commit: 