import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "styled-components";

interface Props {
  src: string | StaticImageData;
  alt?: string;
  size?: number;
  style?: CSSProperties;
}

export default function Icon({ src, alt = "", size = 24, style }: Props) {
  return <Image width={size} height={size} alt={alt} src={src} style={style} />;
}
