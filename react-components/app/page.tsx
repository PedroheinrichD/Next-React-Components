"use client";
import { useState } from "react";
import { CountContext } from "./Context/CountContext";
import { Header } from "./HEADER/Header";

const Page = () => {
  const [onlineCount, setOnlineCount] = useState(99)
 
  return (
    <section className="container mx-auto">
      <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
         <Header />
      </CountContext.Provider>
    </section>
  );
};

export default Page;
