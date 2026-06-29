"use client"

export function ClickEvent() {

    function avisar(msg: string) {
        alert(msg);
    }
   
    return (
        <section>
            <button className="border rounded-md p-2 bg-sky-800 text-white"
             onClick={() => avisar('estou avisando o que eu quero que apareça')}
            >Clique Aqui</button>
            <button className="border rounded-md p-2 bg-red-800 text-white"
             onClick={() => avisar('estou avisando outro tipo de texto para mostrar')}
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


    E QUANDO QUEREMOS PASSAR A MESMA FUNÇÃO SÓ QUE A MENSAGEM É DIFERENTE? 
    1= faço a function
     
    function avisar(msg: string) {
        alert(msg);
    }

    2= PASSAMOS A FUNÇÃO DENTRO DE UM ARROW FUNCTION, PARA QUE QUANDO FOR CLICADO -> EXECUTA
    
    onClick={() => avisar('estou avisando o que eu quero que apareça')
    onClick={() => avisar('estou avisando outro tipo de texto para mostrar')
*/