import type { NavName } from "@/lib/types";
import Link from "next/link";
type NavLink = {
  name: NavName;
  href: string;
};

interface MobileNavItemProps extends NavLink {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavItem = ({ name, href, setIsOpen }: MobileNavItemProps) => {
  return (
    <li
      onClick={() => setIsOpen(false)}
      className="border-muted-foreground/10 py-3 text-sm not-last:border-b"
    >
      <Link href={href} className="block">
        {name}
      </Link>
    </li>
  );
};

export default MobileNavItem;
