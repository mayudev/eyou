"use client";

import { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: var(--color-component-bg);
  box-shadow: 16px 16px 0 var(--color-component-shadow);

  padding: 20px;
  border-radius: 8px;

  margin-right: 12px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

interface Props {
  title: string;
}

export default function Frame({ title, children }: PropsWithChildren<Props>) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
