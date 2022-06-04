import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
  align-items: center;
  gap: 14px;
  margin: 0 auto;

  @media (min-width: 680px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding-bottom: 20px;
  align-items: center;

  .result {
    width: 100%;
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;
    color: #333333;
    word-wrap: break-word;
    padding: 10px;
  }

  .result span {
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;
    color: #828282;
  }

  @media (min-width: 1420px) {
    flex-direction: row;
    align-items: start;
  }
`;

export const Cart = styled.section`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;

  .head {
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
    display: flex;
    width: 100%;
    height: 65px;
    padding: 0px 21px;
    align-items: center;

    & h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #ffffff;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    height: 258px;
    border-radius: 0px 0px 5px 5px;
    overflow-y: auto;

    justify-content: ${({ currentSale }) =>
      currentSale.length > 0 ? "start" : "center"};
    align-items: ${({ currentSale }) =>
      currentSale.length > 0 ? "start" : "center"};
    gap: ${({ currentSale }) => (currentSale.length > 0 ? "25px" : "5px")};
    padding: ${({ currentSale }) =>
      currentSale.length > 0 ? "20px 6px" : "0px"};

    & h3 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #333333;
      margin-bottom: 5px;
    }

    & p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      color: #828282;
    }
  }

  @media (min-width: 400px) {
    .body {
      padding: 20px 21px;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 88px);
  padding: 16px 0px 16px 16px;
  display: flex;
  flex-direction: column;

  & > h2 {
    margin-bottom: 20px;
  }

  @media (min-width: 1230px) {
    padding-right: 16px;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 384px;
  padding-right: 16px;

  @media (min-width: 1230px) {
    padding: 0;
  }
`;

export const Header = styled.header`
  width: 100%;
  padding: 14px 16px;
  background: #f5f5f5;
`;

export const Logo = styled.h1`
  font-weight: 800;
  font-size: 36px;
  color: #333333;

  small {
    font-size: 18px;
    color: #eb5757;
  }
`;

export const Product = styled.article`
  width: 70%;
  max-width: 300px;
  min-width: 240px;
  min-height: 346px;

  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  transition: all ease 0.5s;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
  }

  .productImage {
    height: 150px;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      width: 177px;
      height: 177px;
      object-fit: cover;
    }
  }

  .productInfo {
    flex: 1;
    padding: 26px 21px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #333333;
    }

    & p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #828282;
    }

    & span {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #27ae60;
    }
  }

  @media (min-width: 1030px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const ProductList = styled.section`
  display: inline-flex;
  overflow: auto;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 1420px) {
    overflow: unset;
    display: grid;
    grid-template-columns: repeat(3, auto);
  }
`;

export const CartProduct = styled.article`
  display: flex;
  width: 100%;
  height: 80px;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 100%;
    padding: 5px;
    background: #e0e0e0;
    border-radius: 5px;

    & img {
      width: 70px;
      height: 70px;
      object-fit: cover;
    }
  }

  .info {
    flex: 1;
    height: 100%;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    & h3 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #333333;
    }

    & span {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #828282;
    }
  }

  .remove {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & button {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #bdbdbd;
      transition: all ease 0.5s;

      &:hover {
        color: #333333;
        transform: translateY(-3px);
      }
    }
  }

  .carrinhoItemQtArea {
    width: 71px;
    display: inline-flex;
    background-color: #eee;
    border-radius: 10px;
    height: 30px;
    transform: scale(0.7);
  }

  .carrinhoItemQtArea button {
    border: 0;
    background-color: transparent;
    font-size: 17px;
    outline: 0;
    cursor: pointer;
    padding: 0px 10px;
    color: #333;
  }

  .carrinhoItemQt {
    line-height: 30px;
  }
`;

export const CartTotal = styled.section`
  padding: 0px 21px;
  width: 100%;
  height: 145px;

  .content {
    border-top: 2px solid #e0e0e0;
    display: flex;
    flex-direction: column;
    padding-bottom: 21px;
    height: 100%;
  }

  .total {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h3 {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #333333;
    }

    & span {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #828282;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    width: 100%;
    height: 60px;
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #828282;
    transition: all ease 0.5s;

    &:hover {
      transform: scale(1.07);
      box-shadow: 0px 0px 8px 2px #e0e0e0;
    }
  }
`;

export const InputSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 10px 0px 15px;
  width: 100%;
  max-width: 365px;
  height: 60px;

  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 8px;

  input {
    padding: 19px 0px;
    flex: 1;
    width: 50px;
    margin-right: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8f8080;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0px 20px;
  width: 107px;
  height: 40px;

  background: #27ae60;
  border: 2px solid #27ae60;
  border-radius: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  transition: all ease 0.5s;

  &:hover {
    color: #27ae60;
    background-color: #ffffff;
    transform: scale(1.1);
  }
`;
