import Image, { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData;
  alt?: string;
}

export default function NavIcon({ src, alt = "" }: Props) {
  return <Image src={src} alt={alt} height={24} />;
}
