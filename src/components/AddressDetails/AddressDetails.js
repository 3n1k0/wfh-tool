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

const InnerWrapper = styled.div`
  display: flex;
`;

const StreetInput = styled(InputField)`
  flex: 2;
`;

const AddressDetails = () => {
  return (
    <Wrapper>
      <InputField placeholder="Town/City" />
      <Divider />
      <InnerWrapper>
        <InputField placeholder="Street" />
        <InputField placeholder="House nr." />
      </InnerWrapper>
      <Divider />
      <ZipCodeWrapper>
        <InputField placeholder="Zip Code" />
      </ZipCodeWrapper>
    </Wrapper>
  );
};

export default AddressDetails;
