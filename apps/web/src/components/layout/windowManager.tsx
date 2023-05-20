"use client";

import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  center?: boolean;
  grid?: string;
  padding?: number;
}

const Manager = styled.div<Props>`
  min-height: calc(100vh - var(--taskbar-height) - 64px);

  ${props =>
    props.center &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  ${props =>
    props.grid &&
    `
    display: grid;
    grid-template-columns: ${props.grid};
    gap: 16px;
    grid-auto-rows: min-content;
    align-items: start;
    margin-bottom: 64px;
  `}

  ${props => props.padding && `padding: ${props.padding}px;`}
`;

export default function WindowManager({
  children,
  ...args
}: PropsWithChildren<Props>) {
  return <Manager {...args}>{children}</Manager>;
}
