"use client"

export function ClickEvent() {

   
    return (
        <section>
            <button className="border rounded-md p-2 bg-sky-800 text-white"
             onClick={() =>{
                alert("aa")
             }
             }
            >Clique Aqui</button>
        </section>
    )
}


/*
    FORMAS DE FAZER O MESMO EVENTO DE CLICK (vai depender o que voce quer fazer)

     1 = fazer uma function separada e chamar ela dentro do elemento 
     function click() {
         alert("Apertou o botao")
     }

    2 = tem como fazer a mesma função direto no elemento, no caso não precisa chamar ela  

    3 = arrow functions tbm funciona direto no elemento
            () =>{
                alert("Apertou o botao")
            }
*/