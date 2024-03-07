import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import LogoImage from "../../components/Logoimage/LogoImage";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar pad--x-lg">
      <Link
        to="/"
        className="navbar__logo flex flex--center"
        aria-label="navigate home"
      >
        <LogoImage />
      </Link>

      <Button type="button" variant={"bg btn--bg--primary"}>
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
