import { useActiveSection } from "@/components/context/active-section-provider";
import { motion } from "framer-motion";
import Link from "next/link";

type NavLink = {
  name: string;
  href: string;
};

const DesktopNavItem = ({ name, href }: NavLink) => {
  const { setActiveSection, setTimeOfLastClick, activeSection } =
    useActiveSection();
  return (
    <li>
      <Link
        href={href}
        className="hover:text-foreground relative px-4 py-2 transition-colors"
        onClick={() => {
          setActiveSection(name);
          setTimeOfLastClick(Date.now());
        }}
      >
        {name}
        {name === activeSection && (
          <motion.span
            className="bg-red-50 absolute inset-0 -z-10 rounded-full"
            layoutId="activeSection"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          ></motion.span>
        )}
      </Link>
    </li>
  );
};

export default DesktopNavItem;
