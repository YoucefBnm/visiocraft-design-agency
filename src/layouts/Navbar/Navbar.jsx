import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import LogoImage from "../../components/Logoimage/LogoImage";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const navigateToContact = () => navigate("/contact");

  return (
    <header className="navbar pad--x-lg">
      <Link
        to="/"
        className="navbar__logo flex flex--center"
        aria-label="navigate home"
      >
        <LogoImage />
      </Link>

      <Button
        aria-label="navigate to contact page"
        type="button"
        variant={"bg btn--bg--primary"}
        handleClick={navigateToContact}
      >
        Let&rsquo;s Talk
      </Button>
    </header>
  );
};

export default Navbar;
