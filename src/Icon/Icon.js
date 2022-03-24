import { IconContext } from "react-icons";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

const Icon = (props) => {
  return (
    <Wrapper backgroundColor={props.backgroundColor}>
      <IconContext.Provider value={{ color: props.color, size: props.size }}>
        {props.children}
      </IconContext.Provider>
    </Wrapper>
  );
};

export default Icon;
