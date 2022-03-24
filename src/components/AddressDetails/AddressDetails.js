import styled from "styled-components";
import InputField from "../InputField/InputField";

const Wrapper = styled.div`
  height: 100%;
  border-radius: 15px;
`;

const Divider = styled.div`
  height: 5px;
`;

const AddressDetails = () => {
  return (
    <Wrapper>
      <InputField />
      <Divider />
      <InputField />
      <Divider />
      <InputField />
    </Wrapper>
  );
};

export default AddressDetails;
