import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";


export const Navbar = () => {
  return (
    <nav className="shadow-md bg-white fixed w-full z-20 top-0 left-0 py-2 border-b ">      
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link href='/' className="flex items-center text-xl md:text-2xl"> FreshPicks
            </Link>
          
          <div className="flex items-cente gap-4 text-xl md:text-2xl">
          <Link to="/"> Shop </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
          </div>
      </div>
    </nav>
  );
};
