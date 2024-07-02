import React, { useState } from "react";
import { Footer } from "./Footer";
import Header from "./Header";
import { ButtonTopPage } from "../ButtonTopPage";

export const MainLayout = ({ children }) => {
  const [checkMenu, setCheckMenu] = useState(false);
  const hanlderMenu = () => {
    setCheckMenu(!checkMenu);
  };
  return (
    <>
      <Header hanlderMenu={hanlderMenu} />
      <div
        className={`z-[8888] ${
          checkMenu ? "opacity-100" : "opacity-0"
        } bg-black/50 fixed top-0 left-0 h-full w-full lg:hidden`}
      />
      {children}
      <ButtonTopPage />
      <Footer />
    </>
  );
};
