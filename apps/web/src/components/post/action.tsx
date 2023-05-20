import { IconType } from "react-icons";
import styled from "styled-components";

interface Props {
  icon: IconType;
  value?: string | number;
  title: string;
}

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Action = styled.button`
  background: none;
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const ActionDetails = styled.a`
  text-decoration: none;
  color: inherit;

  margin-left: 6px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default function PostAction({ icon, value, title }: Props) {
  return (
    <ActionContainer title={title}>
      <Action>
        {icon({
          size: 24,
        })}
      </Action>
      <ActionDetails>{value}</ActionDetails>
    </ActionContainer>
  );
}
