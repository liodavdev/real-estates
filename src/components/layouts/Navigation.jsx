import { useState } from "react";
import { useNavigate } from "react-router";
import logo from "/src/assets/logo/golden.svg";
import services from "/src/assets/images/services.jpg";
import invest from "/src/assets/images/invest.jpg";
import buy from "/src/assets/images/buy.jpg";
import sell from "/src/assets/images/sell.jpg";
import rent from "/src/assets/images/rent.jpg";

function Navigation({ children }) {
  const navigate = useNavigate();

  const [hover, setHover] = useState(false);

  const [submenuIsOpen, setSubmenuIsOpen] = useState(false);

  function hoverToggle() {
    setHover(!hover);
  }

  function submenuToggle() {
    setSubmenuIsOpen(!submenuIsOpen);
  }

  function siteNavigation(route) {
    navigate(route);
  }

  return (
    <article className="w-screen h-screen relative bg-light dark:bg-dark overflow-hidden">
      <header className="w-full h-20 fixed z-40 flex justify-between items-center px-3">
        <div
          className="w-14 h-14 grid place-content-center border border-primary bg-transparent cursor-pointer"
          onClick={() => siteNavigation("/")}
        >
          <img
            src={logo}
            className="w-full h-full object-contain"
            alt="cima-logo"
          />
        </div>
        <nav
          className="w-14 h-14 flex justify-center items-center gap-1 border border-primary cursor-pointer"
          onMouseEnter={hoverToggle}
          onMouseLeave={hoverToggle}
          onClick={submenuToggle}
        >
          <i className="w-0 h-2 block border border-primary"></i>
          <i className="w-0 h-6 block border border-primary"></i>
          <i
            className={`${
              hover ? "w-2" : "w-0"
            } h-8 block border border-primary duration-300 ease-in-out`}
          ></i>
          <i className="w-0 h-6 block border border-primary"></i>
          <i className="w-0 h-2 block border border-primary"></i>
        </nav>
      </header>
      <main className="w-full h-full grid grid-cols-1 grid-rows-1 overflow-auto">
        {children}
      </main>
      <menu
        className={`w-full h-full absolute ${
          submenuIsOpen ? "left-0" : "left-full"
        }  top-0 z-50 grid grid-cols-1 grid-rows-[80px_1fr] bg-dark duration-300 ease-in-out`}
      >
        <header className="flex justify-between items-center px-3">
          <div
            className="w-14 h-14 grid place-content-center border border-primary bg-transparent cursor-pointer"
            onClick={() => siteNavigation("/")}
          >
            <img
              src={logo}
              className="w-full h-full object-contain"
              alt="cima-logo"
            />
          </div>
          <nav
            className="w-14 h-14 flex justify-center items-center border border-primary cursor-pointer"
            onMouseEnter={hoverToggle}
            onMouseLeave={hoverToggle}
            onClick={submenuToggle}
          >
            <i
              className={`w-0 h-6 block border-r border-primary ${
                hover ? "rotate-45" : "rotate-0"
              } duration-300 ease-in-out`}
            ></i>
            <i
              className={`w-0 h-6 block border-r border-primary ${
                hover ? "-rotate-45" : "rotate-0"
              } duration-300 ease-in-out`}
            ></i>
          </nav>
        </header>
        <section className="flex justify-center items-center gap-3 p-3">
          <article
            className="w-16 h-2/3 relative cursor-pointer hover:w-full overflow-hidden duration-300 ease-in-out"
            onClick={() => siteNavigation("/services")}
          >
            <img
              src={services}
              className="w-full h-full object-cover scale-125 hover:scale-100 duration-300 ease-in-out"
              alt="services-image"
            />
            <p className="w-full absolute left-0 bottom-0 px-1 py-2 whitespace-nowrap overflow-hidden text-ellipsis text-center text-light bg-dark/60">
              SERVICIOS
            </p>
          </article>
          <article
            className="w-16 h-2/3 relative cursor-pointer hover:w-full overflow-hidden duration-300 ease-in-out"
            onClick={() => siteNavigation("/invest")}
          >
            <img
              src={invest}
              className="w-full h-full object-cover scale-125 hover:scale-100 duration-300 ease-in-out"
              alt="invest-image"
            />
            <p className="w-full absolute left-0 bottom-0 px-1 py-2 whitespace-nowrap overflow-hidden text-ellipsis text-center text-light bg-dark/60">
              INVIERTE
            </p>
          </article>
          <article
            className="w-16 h-2/3 relative cursor-pointer hover:w-full overflow-hidden duration-300 ease-in-out"
            onClick={() => siteNavigation("/buy")}
          >
            <img
              src={buy}
              className="w-full h-full object-cover scale-125 hover:scale-100 duration-300 ease-in-out"
              alt="buy-image"
            />
            <p className="w-full absolute left-0 bottom-0 px-1 py-2 whitespace-nowrap overflow-hidden text-ellipsis text-center text-light bg-dark/60">
              COMPRA
            </p>
          </article>
          <article
            className="w-16 h-2/3 relative cursor-pointer hover:w-full overflow-hidden duration-300 ease-in-out"
            onClick={() => siteNavigation("/sell")}
          >
            <img
              src={sell}
              className="w-full h-full object-cover scale-125 hover:scale-100 duration-300 ease-in-out"
              alt="sell-image"
            />
            <p className="w-full absolute left-0 bottom-0 px-1 py-2 whitespace-nowrap overflow-hidden text-ellipsis text-center text-light bg-dark/60">
              VENDE
            </p>
          </article>
          <article
            className="w-16 h-2/3 relative cursor-pointer hover:w-full overflow-hidden duration-300 ease-in-out"
            onClick={() => siteNavigation("/rent")}
          >
            <img
              src={rent}
              className="w-full h-full object-cover scale-125 hover:scale-100 duration-300 ease-in-out"
              alt="rent-image"
            />
            <p className="w-full absolute left-0 bottom-0 px-1 py-2 whitespace-nowrap overflow-hidden text-ellipsis text-center text-light bg-dark/60">
              RENTA
            </p>
          </article>
        </section>
      </menu>
    </article>
  );
}

export default Navigation;
