import * as C from "../../appStyles";
import InputSearch from "../InputSearch";
import Logo from "../Logo";

const Header = ({ showProducts, fieldValue, setFieldValue }) => {
  return (
    <C.Header>
      <C.ContainerHeader>
        <Logo />
        <InputSearch
          showProducts={showProducts}
          fieldValue={fieldValue}
          setFieldValue={setFieldValue}
        />
      </C.ContainerHeader>
    </C.Header>
  );
};

export default Header;
