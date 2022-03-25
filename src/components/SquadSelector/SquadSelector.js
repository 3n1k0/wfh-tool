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

const SquadSelector = ({ squads }) => {
  return (
    <Wrapper>
      <SquadTitle>Please select your squad:</SquadTitle>
      {squads.map((squad) => {
        return (
          <>
            <input
              key={squad}
              type="radio"
              id={squad}
              name="squad"
              value={squad}
            />
            <Label htmlFor="squad">{squad}</Label>
            <br />
          </>
        );
      })}
    </Wrapper>
  );
};

export default SquadSelector;
