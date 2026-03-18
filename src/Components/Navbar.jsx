import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const Menu = ({ to, title }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => `p-2 ${isActive ? "bg-amber-700" : ""} `}
      >
        {title}
      </NavLink>
    );
  };

  return (
    <>
      <div className="flex gap-7 items-center bg-[#003049] py-4 px-4">
        <div>
          <img className="w-[120px]" src={Logo} alt="" />
        </div>
        <div className="flex items-center gap-2 text-amber-50">
          <Menu to={"/"} title={"Home"} />
          <Menu to={"/products"} title={"Products"} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
