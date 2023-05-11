import Image from "next/image";
import styled from "styled-components";

const StartButton = styled.button`
  font: inherit;
  outline: none;
  border: none;
  border-top-right-radius: 16px;

  background: var(--color-primary);
  color: white;

  font-size: 18px;
  font-weight: 600;
  padding: 0 18px;

  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    background: var(--color-primary-h);
  }
`;

const Text = styled.span`
  margin-left: 6px;
`;

export default function Start() {
  return (
    <StartButton>
      <Image src="/favicon.png" alt="eyou" height={24} width={24} />
      <Text>start</Text>
    </StartButton>
  );
}
