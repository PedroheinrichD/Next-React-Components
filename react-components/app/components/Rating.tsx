type Props = {
  rating: number;
};

export function Rating({ rating }: Props) {
  const result = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      result.push("😊");
    } else {
      result.push("😭");
    }
  }

  return (
    <section className="flex justify-center p-4">
      <h2 className="bg-gray-600 text-white w-14 h-10 text-2xl flex justify-center items-center rounded-sm">
        {rating}
      </h2>
      <h2 className="text-2xl flex justify-center items-center rounded-sm">
        {result}
      </h2>
    </section>
  );
}
