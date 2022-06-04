import * as C from "../../appStyles";

const Button = ({
  children,
  showProducts,
  fieldValue,
  addToCart,
  cartItem,
}) => {
  return (
    <C.Button
      onClick={() => {
        if (showProducts) {
          showProducts(fieldValue);
        } else if (addToCart) {
          addToCart(cartItem);
        }
      }}
    >
      {children}
    </C.Button>
  );
};

export default Button;
