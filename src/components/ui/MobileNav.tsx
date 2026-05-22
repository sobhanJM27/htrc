import type { booleanStateHandleType } from "@/types/stateFnsTypes";
import ThemeToggle from "../ThemeToggle";
import Hamburger from "./icons/Hamburger";

export type MobileNavProps = {
  setOpen: booleanStateHandleType;
};

const MobileNav = ({ setOpen }: MobileNavProps) => {
  return (
    <nav className="flex md:hidden justify-between items-center z-10000">
      <div className="z-40">
        <ThemeToggle />
      </div>
      <span className="font-semibold text-lg text-background dark:text-foreground">
        HTRCentre
      </span>
      <button onClick={() => setOpen((prev) => !prev)}>
        <Hamburger className="w-6 h-6 text-muted-foreground dark:text-foreground" />
      </button>
    </nav>
  );
};

export default MobileNav;
