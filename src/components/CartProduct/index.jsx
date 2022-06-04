import * as C from "../../appStyles";

const CartProduct = ({
  name,
  category,
  img,
  quantity,
  id,
  price,
  removeFromCart,
  decreaseInCart,
  increaseInCart,
}) => {
  return (
    <C.CartProduct>
      <section className="image">
        <img src={img} alt={name} />
      </section>
      <section className="info">
        <h3>{name}</h3>
        <span>{category}</span>
      </section>
      <section className="remove">
        <button
          onClick={() => {
            removeFromCart(id);
          }}
        >
          Remover
        </button>
        <div className="carrinhoItemQtArea">
          <button
            onClick={() => {
              decreaseInCart(id);
            }}
            className="cart--item-qtmenos"
          >
            -
          </button>
          <div className="carrinhoItemQt">{quantity}</div>
          <button
            onClick={() => {
              increaseInCart(id);
            }}
            className="cart--item-qtmais"
          >
            +
          </button>
        </div>
      </section>
    </C.CartProduct>
  );
};

export default CartProduct;
