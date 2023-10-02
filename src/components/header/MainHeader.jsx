import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";

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
        <header className=" container mx-auto bg-slate-200 flex items-center px-4 gap-4 py-8 ">
            <button className="md:hidden" onClick={handleOpenMenu}>
                <MenuIcon />
            </button>
            <img
                src={LogoSneakes}
                alt="Logo Sneakers"
                className="mr-auto md:mr-0 mb-1"
            />

            <nav className={navClass}>
                <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
                    <CloseIcon />
                </button>
                <a href="#">Collections</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            <div className="flex gap-4">
                <button>
                    <CartIcon />
                </button>
                <img src={AvatarImage} alt="" className="w-10" />
            </div>
        </header>
    );
};

export default MainHeader;
