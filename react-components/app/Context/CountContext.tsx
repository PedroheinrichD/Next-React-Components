import { createContext, ReactNode, useState } from "react";


// o que o contexto vai fornecer para os componentes que o consumirem
type CountContextType = {
    onlineCount: number;
    setOnlineCount: (n: number) => void
}
// criando contexto
export const CountContext = createContext<CountContextType|null>(null) 


// children é tipado com ReactNode, porque pode receber um JSX, strings, arrays, etc
type Props = {
    children: ReactNode;
}

// <CountContext.Provider value=...>: fornece o objeto {onlineCount, setOnlineCount} para todos os componentes descendentes que chamarem useContext(CountContext).
export function Context({ children }: Props) {
  const [onlineCount, setOnlineCount] = useState(99)

  return(
    <>
        <CountContext.Provider value={{onlineCount, setOnlineCount}}>
            {children}
        </CountContext.Provider>
    </>
  ) 

}