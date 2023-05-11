"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import NavIcon from "./NavIcon";
import { StaticImageData } from "next/image";

import arrow from "mutant_svg/emoji/arrow_left.svg";

interface Props {
  href: string;
  title: string;
  active: boolean;
  icon: string | StaticImageData;
}

const Entry = styled(Link)`
  display: block;
  background: var(--color-pink-bright);

  color: white;
  text-decoration: none;

  display: flex;
  align-items: center;

  padding: 6px 12px;

  &:nth-child(even) {
    background: var(--color-pink-dark);
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.span`
  margin-right: 8px;
`;

const appear = keyframes`
  0% {
    transform: translateX(20px);
    rotate: 90deg;
  }
  50% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const ActiveNavIcon = styled.span`
  animation: ${appear} 0.5s ease;
`;

export default function NavEntry({
  href,
  title,
  active,
  icon,
}: PropsWithChildren<Props>) {
  return (
    <Entry href={href}>
      <Icon>
        <NavIcon src={icon} alt={title} />
      </Icon>
      <span>{title}</span>
      <span style={{ flex: 1 }} />
      {active && (
        <ActiveNavIcon>
          <NavIcon src={arrow} />
        </ActiveNavIcon>
      )}
    </Entry>
  );
}
