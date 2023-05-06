import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const Styled = styled.input`
  // reset
  border: 0;
  outline: 0;
  font: inherit;
  box-sizing: border-box;
  width: 100%;

  // custom
  background: var(--color-primary);
  color: white;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25) inset;
  padding: 4px;

  &:focus-within {
    background: var(--color-primary-h);
  }
`;

export default ({ type = "text", ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <Styled type={type} {...props} />
);
