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

export default MENU_OPTIONS;
