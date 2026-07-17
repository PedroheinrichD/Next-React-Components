"use client";

import { Context } from "./Context/CountContext";
import { Header } from "./HEADER/Header";

const Page = () => {
  return (
    <section className="container mx-auto">
      <Context>
        <Header />
      </Context>
    </section>
  );
};

export default Page;
