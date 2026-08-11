import { api } from "@/utils/api"
import { useRef } from "react"

export function AxiosFilePost() {
    const fileInput = useRef<HTMLInputElement>(null)

    async function handleFilePost() {
        if(fileInput.current?.files && fileInput.current?.files.length > 0){
            const file = fileInput.current?.files[0] // pegando o primeiro item da lista files
            
            const data = new FormData() // caixa de itens
            data.append('file', file)

            const res = await api.post('/posts', {data})
            console.log(res);
            
            
        }
        
    }

    return (
        <div className="flex flex-col">
            <input type="file" ref={fileInput} />
            <button
                className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleFilePost}
            >
                Enviar File
            </button>
        </div>
    )

}
