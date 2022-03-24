import styled from "styled-components";

const Label = styled.label`
  margin: 5px;
`;

const Wrapper = styled.div`
  background-color: rgba(206, 242, 230, 0.5);
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 15px;
`;

const SquadTitle = styled.p`
  font-weight: bold;
`;

const SquadSelector = () => {
  return (
    <Wrapper>
      <SquadTitle>Please select your squad:</SquadTitle>
      <input type="radio" id="elly" name="squad" value="elly" />
      <Label for="elly">Elly</Label>
      <br />
      <input type="radio" id="wilson" name="squad" value="wilson" />
      <Label for="wilson">Wilson</Label>
      <br />
      <input type="radio" id="cohen" name="squad" value="cohen" />
      <Label for="cohen">Cohen</Label>
      <br />
      <input type="radio" id="tenzing" name="squad" value="tenzing" />
      <Label for="cohen">Tenzing</Label>
    </Wrapper>
  );
};

export default SquadSelector;
