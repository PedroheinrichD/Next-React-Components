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

  // valor do input está sendo guardado dentro do state newTask
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask != "") { // verificação para que o campo de texto nao seja vazio
      setList([
        ...list,
        {
          label: newTask,
          checkbox: false,
          id: crypto.randomUUID(),
        },
      ]);
      setNewTask(""); // limpa campo de texto
    } else {
      alert("CAMPO VAZIO");
    }

    setNewTask(""); // limpa campo de texto
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Minha Lista de Tarefas
      </h1>

      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Adicionar nova tarefa..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
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
              <input type="checkbox" className="w-4 h-4 accent-blue-500" />
              <span>{item.label}</span>
            </div>
            <button className="text-gray-400 hover:text-red-500 transition-colors text-xl leading-none px-2">
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
