import { useEffect, useState } from "react";
import "./App.css";
import * as C from "./appStyles";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [fieldValue, setFieldValue] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((resp) => resp.json())
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err));
  }, []);

  const showProducts = (value) => {
    let filtered = products.filter(
      ({ name, category }) =>
        name.toLowerCase().includes(value.toLowerCase()) ||
        category.toLowerCase().includes(value.toLowerCase())
    );

    if (value) {
      setClicked(true);
    } else {
      setClicked(false);
    }

    if (filtered.length === 0) {
      filtered = ["sem resultado"];
    }

    setFilteredProducts(filtered);
  };

  const addToCart = (cartItem) => {
    const isThere = currentSale.findIndex((item) => item.id === cartItem.id);

    if (isThere >= 0) {
      currentSale[isThere].quantity++;
      setCurrentSale([...currentSale]);
    } else {
      setCurrentSale([...currentSale, cartItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = currentSale.filter((item) => item.id !== id);

    setCurrentSale(newCart);
  };

  const removeAllFromCart = () => {
    setCurrentSale([]);
  };

  const increaseInCart = (id) => {
    const positionItem = currentSale.findIndex((item) => item.id === id);
    currentSale[positionItem].quantity++;
    setCurrentSale([...currentSale]);
  };

  const decreaseInCart = (id) => {
    const positionItem = currentSale.findIndex((item) => item.id === id);
    currentSale[positionItem].quantity--;

    if (currentSale[positionItem].quantity < 1) {
      removeFromCart(id);
    } else {
      setCurrentSale([...currentSale]);
    }
  };

  return (
    <>
      <Header
        showProducts={showProducts}
        fieldValue={fieldValue}
        setFieldValue={setFieldValue}
      />
      <C.Main>
        {clicked && fieldValue.length !== 0 && (
          <C.Container>
            <h2 className="result">
              Resultados para: <span>{fieldValue}</span>
            </h2>
          </C.Container>
        )}
        <C.Container>
          <ProductsList
            filteredProducts={filteredProducts}
            products={products}
            addToCart={addToCart}
          />
          <C.Aside>
            <Cart
              currentSale={currentSale}
              removeFromCart={removeFromCart}
              increaseInCart={increaseInCart}
              decreaseInCart={decreaseInCart}
              removeAllFromCart={removeAllFromCart}
            />
          </C.Aside>
        </C.Container>
      </C.Main>
    </>
  );
}

export default App;
