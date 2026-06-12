import { Person } from "./components/person";

const Page = () => {
  return (
    <>
      <section>
        <Person 
          name="Keyson"
          address="brasil"
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
