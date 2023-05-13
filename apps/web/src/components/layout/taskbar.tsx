"use client";

import styled from "styled-components";
import Start from "./start/startButton";

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  height: var(--taskbar-height);

  background: var(--color-gradient-default);
`;

export default function Taskbar() {
  return (
    <Nav>
      <Start />
    </Nav>
  );
}
