type Props = {
  name: string;
  address: string;
  avatar?: string;
};

export const Person = ({
  name,
  address,
  avatar = "https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-black-default-avatar-image_2237212.jpg",
}: Props) => {
  return (
    <>
      <section>
        <h1>
          Seja bem vindo {name} que mora na rua {address}
        </h1>
        <img className="h-35" src={avatar} alt="" />
      </section>
    </>
  );
};
