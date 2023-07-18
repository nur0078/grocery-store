import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";


export const Navbar = () => {
  return (
    <nav className="shadow-md bg-white fixed w-full z-20 top-0 left-0 py-2 border-b text-xl md:text-2xl lg:text-3xl">      
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link href='/' className="flex items-center "> FreshPicks
            </Link>
          
          <div className="flex gap-4 ">
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
