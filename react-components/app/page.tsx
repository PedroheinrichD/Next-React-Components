import { PeopleList } from "../data/PeopleList";

const Page = () => {

  return (
    <>
      <section className="flex flex-col gap-10">
      <ul>
       {PeopleList.map(
        person => <li key={person.id}> {person.name} / {person.profession}</li>
        )}
      </ul>
      </section>
    </>
  );
};

export default Page;
