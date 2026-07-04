type Props = {
  phrase: string;
  author?: string;
};

export const Card = ({ phrase, author }: Props) => {

  return (
    <div className="text-center border-2 border-sky-600 p-3">
      {
        author && <h1 className="text-xl">{author}</h1>
      }
      {!author && "Autor Desconhecido"}
      <h2 className="italic text-sm">{phrase}</h2>
    </div>
  );
};
