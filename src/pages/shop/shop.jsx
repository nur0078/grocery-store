import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop ">
      <div className="shopTitle">
        <h1 className="text-2xl pt-4">FreshPicks Groceries</h1>
      </div>

      <div className="products pt-10">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
};
