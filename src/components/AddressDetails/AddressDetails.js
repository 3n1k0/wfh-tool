import { useLocalStorage } from "react-use";
import styled from "styled-components";
import InputField from "../InputField/InputField";

const Wrapper = styled.div`
  height: 100%;
  border-radius: 15px;
`;

const Divider = styled.div`
  height: 15px;
`;

const ZipCodeWrapper = styled.div`
  width: 150px;
`;

const AddressDetails = () => {
  const [town, setTown] = useLocalStorage("town", "");

  return (
    <Wrapper>
      <InputField
        value={town}
        onChange={(e) => setTown(e.target.value)}
        placeholder="Town/City"
      />
      <Divider />
      <InputField placeholder="Street" />
      <Divider />
      <InputField placeholder="House nr, addition" />
      <Divider />
      <ZipCodeWrapper>
        <InputField placeholder="Zip Code" />
      </ZipCodeWrapper>
    </Wrapper>
  );
};

export default AddressDetails;
