import * as C from "../../appStyles";
import Button from "../Button";

const Product = ({ name, category, price, img, addToCart, id }) => {
  const newPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  const cartItem = {
    name,
    category,
    img,
    id,
    price,
    quantity: 1,
  };

  return (
    <C.Product>
      <section className="productImage">
        <img src={img} alt={name} />
      </section>
      <section className="productInfo">
        <h2>{name}</h2>
        <p>{category}</p>
        <span>{newPrice}</span>
        <Button addToCart={addToCart} cartItem={cartItem}>
          Adicionar
        </Button>
      </section>
    </C.Product>
  );
};

export default Product;
