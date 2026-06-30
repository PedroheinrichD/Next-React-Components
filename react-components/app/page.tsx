"use client"
import { ClickEvent } from "./components/ClickEvent";

const Page = () => {

  // funcao para alertar 
    const alertPage = () => alert("passando evento via prop")
 
  return (
    <section className="h-screen flex justify-center items-center">

        <ClickEvent 
        alertar={alertPage}
          label="Clique aqui"
        />
    </section>
  );
};

export default Page;
