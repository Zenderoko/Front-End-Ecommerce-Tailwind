import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";
import NavLinkHeader from "@/components/header/NavLinkHeader";

const MainHeader = () => {
    const [navClass, setNavClass] = useState(
        "hidden font-bold md:h-auto md:flex-row md:flex md:gap-4 md:static md:p-0  md:mr-auto"
    );

    const handleOpenMenu = () => {
        setNavClass(
            "absolute  top-0  left-0 h-full  font-bold p-8 bg-gray-400 w-4/5 flex flex-col gap-y-[21px] md:flex-row md:flex md:gap-4 md:static md:p-0  md:mr-auto"
        );
    };
    const handleCloseMenu = () => {
        setNavClass(
            "hidden font-bold md:h-auto md:flex-row md:flex md:gap-4 md:static md:p-0  md:mr-auto"
        );
    };

    return (
        <>
            <header className=" container p-4 md:p-0 mx-auto bg-white-primary flex items-center py-4 gap-8 md:py-0 ">
                <button className="md:hidden" onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img
                    src={LogoSneakes}
                    alt="Logo Sneakers"
                    className="mr-auto md:mr-0 mb-1"
                />

                <nav className={navClass}>
                    <button
                        className="mb-12 md:hidden"
                        onClick={handleCloseMenu}
                    >
                        <CloseIcon />
                    </button>
                    <NavLinkHeader text="Collections" />
                    <NavLinkHeader text="Men" />
                    <NavLinkHeader text="Women" />
                    <NavLinkHeader text="About" />
                    <NavLinkHeader text="Contact" />
                </nav>
                <div className="flex gap-4">
                    <button>
                        <CartIcon />
                    </button>
                    <img src={AvatarImage} alt="" className="w-10" />
                </div>
            </header>
            <span className="hidden container mx-auto md:block h-[1px] w-full bg-gray-500"></span>
        </>
    );
};

export default MainHeader;
