"use client"

import { SyntheticEvent} from "react";


function LoginForm() {

  function handleFormSubmit(event: SyntheticEvent<HTMLFormElement>){
    event.preventDefault()
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-sm  mt-10 p-8 bg-white rounded-xl shadow-md space-y-4"
      >
      <h2 className="text-xl font-semibold text-gray-800">Entrar</h2>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-sky-600 py-2 rounded-md text-white"
      >
        Entrar
      </button>
    </form>
  );
}

export default LoginForm;