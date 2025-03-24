import Card from "./Card";

const CardList = ({ items }) => {
  return (
    <section className="cards">
      {items.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </section>
  );
};

export default CardList;
