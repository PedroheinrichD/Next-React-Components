type Props = {
  rating: number;
};

export function Rating({ rating }: Props) {
  const result = [];
  const RatingRounded = Math.floor(rating);
  let emoji;
  if (RatingRounded === 1) emoji = '😭';
  if (RatingRounded === 2) emoji = '😥';
  if (RatingRounded === 3) emoji = '😐';
  if (RatingRounded === 4) emoji = '😀';
  if (RatingRounded === 5) emoji = '🥳';
  
  for (let i = 0; i < 5; i++) {
    // enquanto a posição for menor do que a nota arredondada a estrela deve ser preenchida.
    if (i < RatingRounded) {
      result.push(emoji);
    } else {
      result.push("😶");
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
