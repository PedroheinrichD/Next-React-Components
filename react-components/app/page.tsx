import { Person } from "./components/person";

const Page = () => {
  return (
    <>
      <section>
        <Person 
          name="Keyson"
          address="brasil"
          avatar="https://img.magnific.com/fotos-gratis/jovem-homem-posando-isolado-contra-a-parede-em-branco-do-estudio_273609-12356.jpg?semt=ais_hybrid&w=740&q=80"
        />

        <Person
          name="Pedro"
          address="estados unidos"
        />
      </section>
    </>
  );
};

export default Page;
