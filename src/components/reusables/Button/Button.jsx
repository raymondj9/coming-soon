import styled from "styled-components";
import Spinner from "../loaders/Spinner/Spinner";

const Button = ({
  children,
  type = "button",
  className,
  loading,
  variant,
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      className={`${
        variant == "outline"
          ? "border-primary b-2"
          : variant !== "other"
          ? "bg-primary"
          : ""
      } relative block w-full px-6 font-semibold ${className}`}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-size: 17px;
  outline: none;
  border: none;
  min-height: 54px;
  border: none;
  outline: none;
  overflow: hidden;
  border-radius: 5px;
  opacity: ${(props) => (props.disabled !== true ? 1 : 0.8)};
  transition: 0.75s all ease;

  @media screen and (max-width: 400px) {
    font-size: 14px;
    height: 45px;
    padding: 0 0.8rem;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.disabled !== true ? "rgba(0, 0, 0, 0.1)" : null};
    position: absolute;
    transition: all 1s ease;
    top: 0;
    left: -100%;
    z-index: 1;
    border-radius: 5px;
  }

  &:hover:before {
    left: 0;
  }
`;

export default Button;
