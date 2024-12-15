import { Link } from "react-router";
import { SearchIcon } from "../../../assets/icons";

function Submenu() {
  return (
    <article className="w-full grid grid-cols-1 grid-rows-[40px_40px] gap-5 p-5 bg-dark">
      <nav className="flex justify-end items-center gap-5">
        <Link to="/buy">
          <p className="px-1 py-1 relative text-light border-b after:w-0 after:h-1 after:absolute after:left-0 after:-bottom-[1px] after:border-b-2 after:border-primary hover:after:w-full after:duration-300 after:ease-in-out">
            Compra
          </p>
        </Link>
        <Link to="/sell">
          <p className="px-1 py-1 relative text-light border-b after:w-0 after:h-1 after:absolute after:left-0 after:-bottom-[1px] after:border-b-2 after:border-primary hover:after:w-full after:duration-300 after:ease-in-out">
            Vende
          </p>
        </Link>
        <Link to="/invest">
          <p className="px-1 py-1 relative text-light border-b after:w-0 after:h-1 after:absolute after:left-0 after:-bottom-[1px] after:border-b-2 after:border-primary hover:after:w-full after:duration-300 after:ease-in-out">
            Invierte
          </p>
        </Link>
      </nav>
      <form
        className="relative border p-1"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="w-full h-full pl-2 pr-7 bg-light"
          placeholder="Busca por zona, precio o agente"
        />
        <i className="absolute top-1/2 -translate-y-1/2 right-2 text-primary">
          <SearchIcon fontSize="small" />
        </i>
      </form>
    </article>
  );
}

export default Submenu;
