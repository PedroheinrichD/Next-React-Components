import { PeopleList } from "../data/PeopleList";

const Page = () => {

  const busca = PeopleList.filter(item => item.profession === 'DEV');
  return (
    <>
      <section className="flex flex-col gap-10">
      <ul>
        <h3>Lista de DEVS</h3>
        {busca.map(item  =>
          <li key={item.id}>{item.name}</li>
        )}
      </ul>
      </section>
    </>
  );
};

export default Page;
