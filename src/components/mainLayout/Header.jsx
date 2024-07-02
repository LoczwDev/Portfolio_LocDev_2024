import React, { useEffect, useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { NavItem } from "../NavItem";
import { Link, Events, scrollSpy } from "react-scroll";

const Header = ({ hanlderMenu }) => {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [navIsVisible, setNavIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navItemInfo = [
    {
      name: "About",
      type: "link",
      href: "about",
    },
    {
      name: "Services",
      type: "link",
      href: "services",
    },
    {
      name: "Portfolio",
      type: "link",
      href: "portfolio",
    },
    {
      name: "Skills",
      type: "link",
      href: "skills",
    },
    {
      name: "Blog",
      type: "link",
      href: "blog",
    },
  ];

  const navIsVisibleHandler = () => {
    hanlderMenu(navIsVisible);
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setBgColor("bg_hero");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`top-0 left-0 right-0 z-[9999] fixed ${bgColor} duration-200 lg:px-0 px-3`}
    >
      <header className="w-full container mx-auto py-4 flex items-center justify-between max-w-7xl bg-transparent">
        <div className="flex items-center gap-x-2">
          <Link
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <h3 className="text-3xl font-bold">
              Loc<span className="text-accent">Dev</span>
            </h3>
          </Link>
        </div>
        <div className="lg:hidden flex items-center gap-x-2 ">
          {navIsVisible ? (
            <IoIosClose
              className="w-7 h-7  duration-500"
              onClick={navIsVisibleHandler}
            />
          ) : (
            <IoIosMenu
              className="w-7 h-7  duration-500"
              onClick={navIsVisibleHandler}
            />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "left-0 w-2/3" : "-left-full  w-full"
          } flex-col-reverse transition-all duration-500 bg-accent lg:bg-transparent lg:mt-0 lg:w-auto fixed lg:static top-0 bottom-0 flex lg:flex-row lg:justify-normal justify-center gap-x-5 items-center`}
        >
          <ul className="flex flex-col lg:flex-row gap-y-5 items-center font-bold  gap-x-5 list-none lg:flex-auto lg:mx-3 w-auto ">
            {navItemInfo.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                setNavIsVisible={setNavIsVisible}
                hanlderMenu={hanlderMenu}
                navIsVisible={navIsVisible}
              />
            ))}
          </ul>

          <Link
            to="footer"
            onClick={() => {
              setNavIsVisible(false);
              hanlderMenu(navIsVisible);
            }}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="mt-5 lg:mt-0 border-2 text-white font-semibold rounded-[10px] px-6 py-2 md:bg-accent bg-btn_mb hover:text-neutral-300 transition-all duration-300 cursor-pointer"
          >
            Let’s Talk
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
