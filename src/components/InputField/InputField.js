import Icon from "../../Icon/Icon";
import styled from "styled-components";

const StyledInput = styled.input`
  outline: none;
  border: none;
  padding: 8px 9px;
  background-color: transparent;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 5px 10px;
  border: 0;
  border-radius: 5px;
  align-items: center;
  box-shadow: 0 5px 20px 0 rgb(61 82 96 / 15%);

  &:focus-within {
    outline: 3px solid #cef2e6;
    border-radius: 5px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

const InputField = (props) => {
  return (
    <div className="form-group">
      <Wrapper>
        {props.icon && (
          <Icon backgroundColor="#f3f4f5" color="#34c89f" size={10}>
            {props.icon}
          </Icon>
        )}
        <StyledInput
          onChange={props.onChange}
          placeholder={props.placeholder}
          aria-label={props.ariaLabel}
          id="nameInput"
        />
      </Wrapper>
    </div>
  );
};

export default InputField;
