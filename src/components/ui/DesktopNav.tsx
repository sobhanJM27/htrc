import { Link } from "react-router-dom";
import { navbarTabs } from "@/constants/navbarTabs";
import ThemeToggle from "../ThemeToggle";
import NavbarTab from "./NavbarTab";
import { Logo } from "./Logo";
import Slogan from "./Slogan";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center h-12 rounded-2xl gap-5">
      <div className="flex flex-1 items-center gap-1">
        <Link to="/">
          <Logo src="/logo.png" size="3.5rem" />
        </Link>
        <Slogan className="text-lg" />
      </div>
      <ul className="flex justify-center gap-6">
        {navbarTabs.map((item) => (
          <NavbarTab
            key={item.id}
            url={item.path}
            text={item.name}
            place="navbar"
          />
        ))}
      </ul>
      <div className="flex flex-1 justify-end">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default DesktopNav;
