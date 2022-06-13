import * as C from "../../appStyles";
import Button from "../Button";

const InputSearch = ({ showProducts, fieldValue, setFieldValue }) => {
  return (
    <C.InputSearch>
      <input
        onChange={(e) => {
          setFieldValue(e.target.value);
        }}
        type="text"
        value={fieldValue}
      />
      <Button showProducts={showProducts} fieldValue={fieldValue}>
        Pesquisar
      </Button>
    </C.InputSearch>
  );
};

export default InputSearch;
