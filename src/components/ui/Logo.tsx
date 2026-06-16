import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

// Brand logo — the HAPUS wordmark (dark on transparent). Sits on the white
// header. Swap /public/assets/logo/logo-trimmed.png to change it.
export function Logo({
  className = "",
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label={`${company.name} — home`}
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/assets/logo/logo-trimmed.png"
        alt={`${company.legalName} logo`}
        width={492}
        height={128}
        priority
        className="h-8 w-auto lg:h-9"
      />
    </Link>
  );
}
