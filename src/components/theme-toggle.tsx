'use client";';
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

type ThemeToggleProps = {
  // You can add props if needed
  className?: string;
};

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      className={className}
      variant="outline"
      size="icon"
      aria-label="theme toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.sun className="size-5 dark:hidden" />
      <Icons.moon className="size-5 hidden dark:block" />
    </Button>
  );
};
