import { useState, useContext } from "react";

import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";

import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";

import CartDetailsHeader from "@/components/header/CartDetailsHeader";
import { useCartDetails } from "@/context/useCartDetails";

const MainHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenDetailsCart, setOpenDetailsCart] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  const { totalQuantityProduct } = useContext(useCartDetails);

  return (
    <>
      <header className=" bg-white-primary container relative mx-auto flex items-center gap-8 p-4 py-4 md:p-0 md:py-0">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakes}
          alt="Logo Sneakers"
          className="mb-1 mr-auto md:mr-0"
        />

        <nav
          className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4  md:p-0 ${
            isOpenMenu
              ? "bg-white-primary absolute left-0 top-0 z-10 flex h-full w-4/5 flex-col gap-y-[21px] p-8"
              : "hidden"
          }`}
        >
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Men" />
          <NavLinkHeader text="Women" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button
            onClick={() => setOpenDetailsCart(!isOpenDetailsCart)}
            className="relative"
          >
            <CartIcon />
            <span className="bg-orange-primary absolute right-0 top-0 translate-x-1 rounded-full px-1 text-xs font-bold text-white ">
              {totalQuantityProduct}
            </span>
          </button>
          <img src={AvatarImage} alt="" className="w-10" />
          {isOpenDetailsCart && <CartDetailsHeader />}
        </div>
      </header>
      <span className="bg-white-primary container mx-auto hidden h-[1px] w-full md:block"></span>
    </>
  );
};

export default MainHeader;
