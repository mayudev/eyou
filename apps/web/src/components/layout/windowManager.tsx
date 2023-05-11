"use client";

import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  center?: boolean;
  grid?: string;
  padding?: number;
}

const Manager = styled.div<Props>`
  height: calc(100vh - var(--taskbar-height));
  box-sizing: border-box;

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
  `}

  ${props => props.padding && `padding: ${props.padding}px;`}
`;

export default function WindowManager({
  children,
  ...args
}: PropsWithChildren<Props>) {
  return <Manager {...args}>{children}</Manager>;
}
