import * as C from "../../appStyles";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

const Cart = ({
  currentSale,
  removeFromCart,
  decreaseInCart,
  increaseInCart,
  removeAllFromCart,
}) => {
  return (
    <C.Cart currentSale={currentSale}>
      <section className="head">
        <h2>Carrinho de compras</h2>
      </section>
      <section className="body">
        {currentSale.length > 0 ? (
          currentSale.map(({ name, category, img, id, quantity, price }) => (
            <CartProduct
              key={id}
              name={name}
              category={category}
              img={img}
              quantity={quantity}
              removeFromCart={removeFromCart}
              id={id}
              price={price}
              increaseInCart={increaseInCart}
              decreaseInCart={decreaseInCart}
            />
          ))
        ) : (
          <>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </>
        )}
      </section>
      {currentSale.length > 0 && (
        <CartTotal
          currentSale={currentSale}
          removeAllFromCart={removeAllFromCart}
        />
      )}
    </C.Cart>
  );
};

export default Cart;
