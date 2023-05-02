"use client";

import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  center?: boolean;
}

const Manager = styled.div<Props>`
  display: flex;
  height: calc(100vh - 54px);
  box-sizing: border-box;

  ${(props) =>
    props.center &&
    `
    align-items: center;
    justify-content: center;
  `}
`;

export default function WindowManager({ center, children }: PropsWithChildren<Props>) {
  return <Manager center={center}>{children}</Manager>;
}
