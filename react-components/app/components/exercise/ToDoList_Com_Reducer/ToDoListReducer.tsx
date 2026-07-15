"use client";
import { ListReducer } from "@/Reducers/ListReducer";
import { useReducer, useState } from "react";

export default function TodoModal() {
  const [list, dispatch] = useReducer(ListReducer, []);
  const [inputValue, setInputValue] = useState("");

  function addTaskItem(input: string) {
      dispatch({
        type: "add",
        payload: {
          text: input,
        },
      });
      setInputValue("");
  }

  function removeTaskItem(id: string) {
    if (!window.confirm('Tem certeza?')) return false 
    dispatch({
      type: "RemoveAcion",
      payload: {
        id: id,
      },
    });
  }

  function editTaskItem(id: string) {
    dispatch({
        type:"editText",
        payload: {
            id: id,
            newText: inputValue
        }
    })
  }

  function toggleDone(id: string, checked: boolean) {
    dispatch({
        type: "togleDone",
        payload: {
            id: id,
            done: checked
        }
    })
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow p-5">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">Tarefas</h2>

      <form
        className="flex gap-2 mb-4"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="text"
          placeholder="Nova tarefa"
          className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          className="bg-teal-600 text-white rounded-lg px-4 text-sm font-medium hover:bg-teal-700"
          onClick={inputValue ? () => addTaskItem(inputValue) : () => alert('Campo Vazio')}
        >
          Adicionar
        </button>
      </form>

      <ul className="space-y-2">
        {list.map((list) => (
          <li key={list.id} className="flex items-center gap-2">
            <input 
            type="checkbox" 
            className="w-4 h-4 accent-teal-600"
            checked={list.done}
            onChange={(event) => toggleDone(list.id, event.target.checked)}
            />
            <span className={list.done ? 'flex-1 text-sm line-through text-gray-500' : 'flex-1 text-sm text-slate-700'}>{list.text}</span>
            <button
              className="text-slate-400 hover:text-red-500 text-sm"
              onClick={() => removeTaskItem(list.id)}
            >
              Remover
            </button>

            <button
              className="text-slate-400 hover:text-red-500 text-sm"
              onClick={inputValue ? () => editTaskItem(list.id) : () => alert('Campo Vazio')}
            >
              Editar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
