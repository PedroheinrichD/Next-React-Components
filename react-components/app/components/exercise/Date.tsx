export function GetDate() {
  const fullTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
    hour12: false,
  }).format();

  const hours = new Date().getHours();

  return (
    <section className="flex flex-col justify-center items-center text-white w-screen h-screen bg-gradient-to-r from-sky-300 to-indigo-300">
      <h1 id="title" className="font-sans text-7xl">
        {fullTime}
      </h1>
      <p id="setMessage" className="text-3xl">
        {hours >= 0 && hours < 12 && "Bom dia 😉" }
        {hours >= 12 && hours < 18 && "boa tarde 😒" }
        {hours >= 18 && "Boa noite 😴"}
      </p>
    </section>
  );
}

