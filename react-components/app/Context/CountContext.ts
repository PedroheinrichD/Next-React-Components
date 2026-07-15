import { createContext } from "react";

type CountContextType = {
    onlineCount: number;
    setOnlineCount: (n: number) => void
}
// criando contexto
export const CountContext = createContext<CountContextType|null>(null) 