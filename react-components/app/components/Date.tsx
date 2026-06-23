export function GetDate() {
  const fullTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
    hour12: false,
  }).format();

  const hours = new Date().getHours();

  let message;
  function changeMessage() {
    if (hours >= 0 && hours < 12) {
      message = "Bom dia 😉";
    }
    if (hours >= 12 && hours < 18) {
      message = "Boa tarde 😒";
    }
    if (hours >= 18) {
      message = "Boa noite 😴";
    }
  }
  changeMessage();

  return (
    <section className="flex flex-col justify-center items-center text-white w-screen h-screen bg-gradient-to-r from-sky-300 to-indigo-300">
      <h1 id="title" className="font-sans text-7xl">
        {fullTime}
      </h1>
      <p id="setMessage" className="text-3xl">
        {message}
      </p>
    </section>
  );
}
