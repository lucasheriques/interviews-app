import { env } from "@/env";
import Image from "next/image";

interface Props {
  domain: string;
  width?: number;
  height?: number;
}

export default function CompanyLogo({
  domain,
  width = 32,
  height = 32,
}: Props) {
  return (
    <Image
      src={`https://img.logo.dev/${domain}?token=${env.LOGO_DEV}`}
      alt="Logo"
      width={width}
      height={height}
    />
  );
}
