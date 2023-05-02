"use client";

import { PropsWithChildren } from "react";
import styled from "styled-components";

const Frame = styled.div`
  display: inline-block;
  background: var(--color-window-bg);

  overflow: hidden;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  box-shadow: 16px 16px 0 rgba(0, 0, 0, 0.25);
`;

const Decorations = styled.div`
  background: var(--color-gradient-default);
  padding: 12px;
`;

const WindowTitle = styled.span`
  font-size: 20px;
  font-weight: 700;

  color: white;
`;

interface Props {
  title: string;

  // meant width
  meant: number;
}

export default function Window({ title, meant, children }: PropsWithChildren<Props>) {
  return (
    <Frame style={{ maxWidth: meant + "px" }}>
      <Decorations>
        <WindowTitle>{title}</WindowTitle>
      </Decorations>
      <div>{children}</div>
    </Frame>
  );
}
