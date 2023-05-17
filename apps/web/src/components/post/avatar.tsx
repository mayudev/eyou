import Image from "next/image";
import styled from "styled-components";

interface Props {
  src: string;
  alt?: string;
  size: number;
}

const Element = styled(Image)`
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.25);
`;

export default function Avatar({ src, size, alt = "" }: Props) {
  return <Element src={src} width={size} height={size} alt={alt}></Element>;
}
