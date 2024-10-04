import { Link } from "react-router-dom";
import { socialLinks } from "../../constants/data";
import "./SocialLinks.scss";
import { PerspectiveText } from "../";

const SocialLinks = ({ className }) => {
  return (
    <ul className={`social ${className}`}>
      {socialLinks.map((link) => {
        return (
          <li key={link.id} className="social__item">
            <Link
              className="social__link"
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`visit ${link.label} page`}
            >
              <PerspectiveText className={"social__label"} label={link.label} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
