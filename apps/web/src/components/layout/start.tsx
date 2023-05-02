import styled from "styled-components";

const StartButton = styled.button`
  font: inherit;
  outline: none;
  border: none;
  background: var(--color-primary);
  color: white;

  font-size: 24px;
  font-weight: 700;
  padding: 12px 18px;
`;

export default function Start() {
  return <StartButton>start</StartButton>;
}
