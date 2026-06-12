

type Props = {
  name: string;
  address: string
};

export const Person = ({name, address}: Props) => {

  return (
    <>
      <h1>Seja bem vindo {name} que mora na rua {address}</h1>
    
    </>
  );
};
