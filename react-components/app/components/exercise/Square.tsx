import { useEffect } from "react"

const Square = () =>{

    useEffect(() => {
       console.log('rodou o effect quando o componente apareceu');
        
        //return dentro do useEffect, é basicamente uma função que vai rodar quando esse componente ou estado sumir do mapa, (não existir mais)
        return () => {
            console.log('sumiu do MAPA');
        }
    })

    return <>
        <section className="w-52 h-52 bg-sky-500 text-white"></section>
    </>
}


export default Square