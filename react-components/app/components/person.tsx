const getWeekDay = () => {
  return Intl.DateTimeFormat("pt-br", { weekday: "long" }).format(new Date());
};

export const Person = () => {
  const user = {
    name: "João",
    lastName: "Silva",
    age: 29,
    city: "São Paulo",
  };

  const name = "Pedro";
  const avatar =
    "https://unsplash.com/pt-br/fotografias/um-homem-com-barba-e-camisa-verde-ZgwIEWcvlKo";

  return (
    <>
      <h1>{name}</h1>
      <img src={avatar} alt={name} />

      <h2>{getWeekDay()}</h2>

      <h2>{user.name}, tem {user.age} anos e mora na cidade {user.city}</h2>
    </>
  );
};
