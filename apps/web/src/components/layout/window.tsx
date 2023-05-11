"use client";

import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const Frame = styled.div`
  display: inline-block;
  background: var(--color-window-bg);

  overflow: hidden;

  border-radius: 10px;

  box-shadow: 16px 16px 0 rgba(0, 0, 0, 0.25);
`;

const Decorations = styled.div`
  background: var(--color-gradient-default);
  padding: 12px 16px;
`;

const WindowTitle = styled.span`
  font-size: 18px;
  font-weight: 700;

  color: white;
`;

const WindowIcon = styled(Image)``;

interface Props {
  title: string;
  icon?: string | StaticImageData;

  // meant width
  meant?: number;
}

export default function Window({
  title,
  icon,
  meant,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Frame style={{ maxWidth: meant + "px" }}>
      <Decorations>
        {icon && <WindowIcon src={icon} alt={title} height={32} />}
        <WindowTitle>{title}</WindowTitle>
      </Decorations>
      <div>{children}</div>
    </Frame>
  );
}
