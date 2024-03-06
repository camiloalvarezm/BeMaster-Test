import streamLogo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MENU_OPTIONS from "../../utils/statics/navbar-list";

const Header = () => {
  return (
    <>
      <header className="bg-black h-24 flex px-10 justify-between items-center">
        <img
          src={streamLogo}
          alt="steam-logo"
          className="h-14 mx-auto lg:mx-0"
        />
        <nav className="hidden lg:flex">
          <ul className="text-white flex gap-14">
            {MENU_OPTIONS.map((item, index) => (
              <li key={index} className="text-sm">
                <FontAwesomeIcon icon={item.icon} className="me-3" />
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;