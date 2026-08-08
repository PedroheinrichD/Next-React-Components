"use client";

import { FetchAPI } from "./components/API_studies/FetchAPI";
import { FetchPOST } from "./components/API_studies/FetchPOST";

const Page = () => {
  return (
    <section className="container mx-auto">
      <FetchAPI/>
      <FetchPOST/>
    </section>
  );
};

export default Page;
