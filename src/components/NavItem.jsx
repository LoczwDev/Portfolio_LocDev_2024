import React from "react";
import { Link } from "react-scroll";

export const NavItem = ({
  item,
  activeSection,
  setActiveSection,
  setNavIsVisible,
  hanlderMenu,
  navIsVisible,
}) => {
  return (
    <li className="group m-3 lg:m-0 relative">
      {item.type === "link" && (
        <>
          <Link
            onClick={() => {
              setActiveSection(item.href);
              setNavIsVisible(false);
              hanlderMenu(navIsVisible);
            }}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to={item.href}
            className={`p-2 before:absolute before:h-1 before:w-0 before:transition-all before:duration-500 before:bg-accent before:-bottom-1 group-hover:before:w-full ${
              activeSection === item.href ? "lg:text-accent" : "lg:text-black text-white"
            }`}
            href="#"
          >
            {item.name}
          </Link>
        </>
      )}
    </li>
  );
};
