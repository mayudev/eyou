"use client";

import styled from "styled-components";

interface Props {
  significant?: boolean;
}

export default styled.p<Props>`
  ${(props) => props.significant && `font-size: 18px`};
`;
