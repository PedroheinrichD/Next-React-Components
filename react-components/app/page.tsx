"use client";

import { AxiosGET } from "./components/AXIOS/AxiosGET";
import { AxiosPOST } from "./components/AXIOS/AxiosPOST";



const Page = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-4 py-8">
      <AxiosGET/>
      <AxiosPOST/>
    </section>
  );
};

export default Page;
