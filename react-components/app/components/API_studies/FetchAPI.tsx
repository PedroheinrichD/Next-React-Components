'use client'
import { User } from "@/types/User";
import { useEffect, useState } from "react";

export function FetchAPI() {

    const [user, setUser] = useState<User[]>([])

  useEffect(() => {
    async function fetchUser() {
      try {
        const req = await fetch("https://jsonplaceholder.typicode.com/users");
        const res = await req.json();
        setUser(res)

      } catch (error) {
        console.log(error);
      }
    }
    fetchUser()
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold">Lista de usuários</h1>
      <ul>
        {user.map((item) => (
            <li 
            key={item.id}
            className="ml-4"
            >
                - {item.name} <strong>endereço:</strong> {item.address.street}
            </li>
        ))}
      </ul>
    </>
  );
}
