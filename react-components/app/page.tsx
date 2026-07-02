"use client"

import { useState } from "react";

const Page = () => {
  
 const [valueInput, setValueInput] = useState('')

  return (
    <section className="p-6">
      <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          
          value={valueInput}
          onChange={event => setValueInput(event.target.value)}
        />

        <p>valor do input: {valueInput}</p>
    </section>
  );
};

export default Page;
