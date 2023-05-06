"use client";

import styled from "styled-components";

export default styled.button`
  // reset
  font: inherit;
  border: 0;
  outline: 0;
  padding: 0;

  // custom
  background: var(--color-primary);
  color: white;

  min-width: 84px;
  padding: 0 8px;
  height: 32px;

  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 3px;

  &:hover {
    background: var(--color-primary-h);
  }

  &:focus-visible {
    outline: var(--focus-outline);
  }

  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
`;
