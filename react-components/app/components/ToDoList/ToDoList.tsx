"use client";
import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

export default function ToDoList() {
  // criando um state que é uma lista de obj, com o tipo TodoItem
  const [list, setList] = useState<TodoItem[]>([
    {
      label: "Fazer tarefa da faculdade",
      checkbox: false,
      id: crypto.randomUUID(),
    },
    {
      label: "comprar laranja no mercado",
      checkbox: false,
      id: crypto.randomUUID(),
    },
  ]);

  // valor do input está sendo guardado dentro do state inputValue
  const [inputValue, setInputValue] = useState("");

  function addTask() {
    if (inputValue != "") { // verificação para que o campo de texto nao seja vazio
      setList([
        ...list, { label: inputValue, checkbox: false, id: crypto.randomUUID(), },
      ]);
      setInputValue(""); // limpa campo de texto
    } else {
      alert("CAMPO VAZIO");
    }

    setInputValue(""); // limpa campo de texto
  }

  /* o setList dentro dessa função atualiza o state list com o que estiver dentro dos parênteses.
     filter() -> pra cada item do array, mantenha ele só se o item.id for diferente do id recebido como parâmetro
  */
  function removeTask(id: string) {
    setList(list.filter(item => item.id !== id)); // Isso pega o list atual e devolve um array novo, contendo só os itens que passaram no teste.
  }

  // verificação para cada item obj, caso o id bater com o checkbox clicado, ele inverte o boolean 
  function toggleCheckbox(id: string) {
    setList(list.map((item) => item.id === id ? { ...item, checkbox: !item.checkbox } : item))
  }


  return (
    <form className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md"
      onSubmit={e => e.preventDefault()}
    >
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Minha Lista de Tarefas
      </h1>

      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Adicionar nova tarefa..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-colors font-medium"
          onClick={addTask}
        >
          Adicionar
        </button>
      </div>

      {/* Lista de itens */}
      <ul className="space-y-2">
        {list.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 accent-blue-500"
                checked={item.checkbox}
                onChange={() => toggleCheckbox(item.id)}
              />
              <span
                className={item.checkbox ? `line-through text-gray-500` : ``}
              >{item.label}</span>
            </div>
            <button className="text-gray-400 hover:text-red-500 transition-colors text-xl leading-none px-2"
              type="button"
              onClick={() => removeTask(item.id)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}


/*--porque criar um novo array?

- No React, quando você atualiza o estado de um componente, é importante 
criar um novo array (ou objeto) em vez de modificar o estado existente
diretamente. Isso ocorre porque o React depende da imutabilidade para 
detectar mudanças no estado e decidir quando re-renderizar o componente.

- Quando você cria um novo array, o React percebe que houve uma mudança no estado
 e re-renderiza o componente, garantindo que a interface do usuário seja 
 atualizada corretamente. Se você modificar o estado existente diretamente 
 (por exemplo, usando métodos como push ou splice), o React pode não detectar 
 a mudança e não atualizar a interface do usuário como esperado.
*/

