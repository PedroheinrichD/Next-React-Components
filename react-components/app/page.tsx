import { Card } from "./components/Card";

const Page = () => {
  return (
    <>
      <section className="flex flex-col gap-10">
        <Card 
          author="Pedro Heinrich"
          phrase="finga até ser..."
        />

          <Card 
          phrase="bla bla bla."
        />
      </section>
    </>
  );
};

export default Page;
