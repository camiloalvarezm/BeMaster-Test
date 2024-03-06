import streamLogo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

interface Item {
  name: string;
  icon: IconDefinition;
}

const MENU_OPTIONS: Item[] = [
  {
    name: "INICIO",
    icon: faHome,
  },
  {
    name: "BÚSQUEDA",
    icon: faSearch,
  },
  {
    name: "MI LISTA",
    icon: faPlus,
  },
  {
    name: "CATEGORIAS",
    icon: faList,
  },
];

const Header = () => {
  return (
    <>
      <header className="bg-black h-24 flex px-10 justify-between items-center">
        <img src={streamLogo} alt="steam-logo" className="h-14 mx-auto lg:mx-0" />
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
