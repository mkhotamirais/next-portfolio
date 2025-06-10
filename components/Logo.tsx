import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-1">
      <Image src="/logo-mkhotami.png" alt="Logo" width={32} height={32} />
      <span className="font-bold">MKHOTAMI</span>
    </Link>
  );
}
