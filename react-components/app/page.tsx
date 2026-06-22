const Page = () => {
  const produtos = [
    {id: 1, name: 'Mouse', preço:50},
    {id: 2, name: 'Teclado', preço:100},
    {id: 3, name: 'Monitor', preço:800},
    {id: 4, name: 'Webcam', preço:150},
  ]
  // mostrar produtos e seus preços
  return (
    <>
      <section className="flex flex-col gap-10">
      <ul>
        <h3>Lista de produtos</h3>
        {produtos.filter(item => item.preço > 100)
        .map((item)=>(
          <li key={item.id}> {item.name} - R${item.preço}</li>
        ))}
      </ul>
      </section>
    </>
  );
};

export default Page;
