import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import LogoImage from "../../components/Logoimage/LogoImage";

const Navbar = () => {
  return (
    <header className="navbar bg-clip backdrop--1 pad--x-lg pad--y-1 pos--sticky top--0 width--100 z--full flex flex--justify-between flex--align-center">
      <Link
        to="/"
        className="navbar__logo flex flex--center"
        aria-label="navigate home"
      >
        <LogoImage />
      </Link>

      <Button type="button" variant={"bg"}>
        <Link
          className="vertical--middle"
          to="/contact"
          aria-label="navigate to contact page"
        >
          Let&rsquo;s Talk
        </Link>
      </Button>
    </header>
  );
};

export default Navbar;
