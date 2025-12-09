"use client";
import { useActiveSection } from "@/components/context/active-section-provider";
import DesktopNavItem from "@/components/DesktopNavItem";
import { Icons } from "@/components/icons";
import MobileNavItem from "@/components/MobileNavItem";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { setActiveSection, setTimeOfLastClick, activeSection } =
    useActiveSection();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-5 z-20 my-5 sm:top-10 sm:my-10"
    >
      {/* Mobile Navbar */}
      <div className="sm:hidden flex items-center gap-2 justify-center">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="bg-background/80 backdrop:backdrop-blur-sm "
            >
              Menu <Icons.chevronDown className="ml-2 size-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-md self-start font-medium">
                Navigaion
              </DialogTitle>
            </DialogHeader>
            <nav>
              <ul>
                {navLinks.map((i) => (
                  <MobileNavItem key={i.name} {...i} setIsOpen={setIsOpen} />
                ))}
              </ul>
            </nav>
          </DialogContent>
        </Dialog>

        <ThemeToggle className="bg-background/80 backdrop-blur-sm sm:hidden" />
      </div>
      <nav className="bg-background/80 items-center gap-2 text-muted-foreground hidden text-sm sm:flex rounded-full border px-2 py-3 backdrop:blur-sm">
        <ul className="flex gap-5">
          {navLinks.map((i) => (
            <DesktopNavItem key={i.name} {...i} />
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
