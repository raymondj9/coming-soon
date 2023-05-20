import styled from "styled-components";

const Input = ({
  className,
  value,
  disabled,
  onChange,
  label,
  errorMsg,
  type = "text",
  ...props
}) => {
  return (
    <InputWrapper className="relative">
      {label && (
        <label className="mb-2 block" htmlFor={props?.id}>
          {label}
        </label>
      )}
      <StyledInput
        type={type}
        className={`w-full block bg-text-field ${className}`}
        value={value}
        onChange={onChange}
        {...props}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  & label {
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    color: #333333;

    @media screen and (max-width: 400px) {
      font-size: 15px;
      line-height: 20px;
    }
  }
`;

const StyledInput = styled.input`
  height: 54px;
  padding: 0 1.2rem;
  border: none;
  outline: none;
  border-radius: 5px;

  @media screen and (max-width: 400px) {
    height: 45px;
    padding: 0 0.8rem;
  }

  &:focus {
    border: none;
    outline: none;
  }

  &:disabled {
    opacity: 0.8;
  }
`;

export default Input;
