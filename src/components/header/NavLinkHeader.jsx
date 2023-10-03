const NavLinkHeader = ({ text }) => {
    return (
        <a href="#" className="group py-8 relative">
            <span className="group-hover:text-orange-primary">{text}</span>
            <span className=" absolute left-0 bottom-0 w-full h-1 block scale-x-0 transition-all duration-500 group-hover:scale-x-100   group-hover:bg-orange-primary "></span>
        </a>
    );
};

export default NavLinkHeader;
