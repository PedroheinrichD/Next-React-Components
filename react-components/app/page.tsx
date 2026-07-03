"use client";

import { useState } from "react";

const Page = () => {
  const [fullName, setFullName] = useState({ name: "", lastName: "" });

  return (
    <section className="p-6 mx-auto text-center space-y-4">
      <div>
        <input
          placeholder="digite seu nome"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={fullName.name}
          onChange={e =>setFullName({...fullName, name: e.target.value})}
        />
        
      </div>
      <div>
        <input
          placeholder="digite seu sobrenome"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={fullName.lastName}
           onChange={e =>setFullName({...fullName, lastName: e.target.value})}
        />
        
      </div>

      <p>Seu nome completo é:</p>
      <p>{fullName.name} {fullName.lastName}</p>
    </section>
  );
};

export default Page;
