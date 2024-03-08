import streamLogo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MENU_OPTIONS, { Item } from "../../utils/statics/navbar-list";
import { Link, NavLink } from "react-router-dom";

const HeaderComponent = () => {
  const headerStyles =
    "sticky top-0 z-10 h-24 flex px-10 justify-center lg:justify-between items-center";

  return (
    <>
      <header
        className={
          window.location.pathname.includes("item-details")
            ? headerStyles
            : `${headerStyles} bg-black`
        }
      >
        <Link to="/home">
          <img
            src={streamLogo}
            alt="stream-logo"
            className="h-14 lg:mx-0 cursor-pointer"
          />
        </Link>
        <nav className="hidden lg:flex">
          <ul className="text-white flex gap-14">
            {MENU_OPTIONS.map((item: Item, index: number) => (
              <NavLink to={item.path} key={index}>
                <li className="text-sm cursor-pointer">
                  <FontAwesomeIcon icon={item.icon} className="me-3" />
                  {item.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default HeaderComponent;
