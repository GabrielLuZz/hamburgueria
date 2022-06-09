import * as C from "../../appStyles";
import Product from "../Product";

const ProductsList = ({ products, filteredProducts, addToCart }) => {
  return (
    <C.ProductList>
      {filteredProducts.length > 0 &&
      filteredProducts[0] !== "sem resultado" ? (
        filteredProducts.map(({ name, category, price, img, id }) => (
          <Product
            key={id}
            name={name}
            category={category}
            price={price}
            img={img}
            addToCart={addToCart}
            id={id}
          />
        ))
      ) : filteredProducts[0] === "sem resultado" ? (
        <></>
      ) : (
        products.length > 0 &&
        products.map(({ name, category, price, img, id }) => (
          <Product
            key={id}
            name={name}
            category={category}
            price={price}
            img={img}
            addToCart={addToCart}
            id={id}
          />
        ))
      )}
    </C.ProductList>
  );
};

export default ProductsList;
