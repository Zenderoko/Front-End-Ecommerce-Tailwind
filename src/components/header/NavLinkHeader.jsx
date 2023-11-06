const NavLinkHeader = ({ text }) => {
  return (
    <a href="#" className="group relative py-8">
      <span className="group-hover:text-orange-primary">{text}</span>
      <span className=" group-hover:bg-orange-primary absolute bottom-0 left-0 block h-1 w-full scale-x-0 transition-all duration-500   group-hover:scale-x-100 "></span>
    </a>
  );
};

export default NavLinkHeader;
