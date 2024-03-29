import {
  IconDefinition,
  faRightFromBracket,
  faHome,
  faSearch,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export interface Item {
  name: string;
  icon: IconDefinition;
  path: string;
}

const MENU_OPTIONS: Item[] = [
  {
    name: "INICIO",
    icon: faHome,
    path: "/home",
  },
  {
    name: "BÚSQUEDA",
    icon: faSearch,
    path: "#",
  },
  {
    name: "MI LISTA",
    icon: faPlus,
    path: "#",
  },
  {
    name: "SALIR",
    icon: faRightFromBracket,
    path: "/login",
  },
];

export default MENU_OPTIONS;
