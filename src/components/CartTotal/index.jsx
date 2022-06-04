import * as C from "../../appStyles";

const CartTotal = ({ currentSale, removeAllFromCart }) => {
  const total = currentSale.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const newTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  return (
    <C.CartTotal>
      <div className="content">
        <div className="total">
          <h3>Total</h3>
          <span>{newTotal}</span>
        </div>
        <button onClick={removeAllFromCart}>Remover todos</button>
      </div>
    </C.CartTotal>
  );
};

export default CartTotal;
