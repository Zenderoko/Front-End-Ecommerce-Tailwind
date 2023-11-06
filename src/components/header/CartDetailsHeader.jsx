import { useCartDetails } from "@/context/useCartDetails";
import { useContext } from "react";

import DeleteIcon from "@/components/icons/DeleteIcon";

const CartDetailsHeader = () => {
  const { cartProducts, deleteCartProducts } = useContext(useCartDetails);

  return (
    <section className=" absolute top-[125%] z-10 w-full  md:left-full md:top-full md:max-w-md md:-translate-x-full">
      <div className="bg-white-primary mx-4 rounded-md shadow-md">
        <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
        <hr />
        {cartProducts.length === 0 && (
          <p className="py-16 text-center">Your cart is empty</p>
        )}

        {cartProducts.map((product) => (
          <article
            key={product.id}
            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4"
          >
            <img src={product.img} alt="" className="rounded-md" />
            <div>
              <h6>{product.subtitle}</h6>
              <p>
                <span>
                  ${product.discountPrice} x {product.quantity}
                </span>
                {" = "}
                <span className="font-bold">
                  ${product.discountPrice * product.quantity}
                </span>
              </p>
            </div>
            <button
              className="ml-auto"
              onClick={() => deleteCartProducts(product.id)}
            >
              <DeleteIcon className="hover:fill-orange-primary" />
            </button>
          </article>
        ))}
        {cartProducts.length !== 0 && (
          <div className="px-6 pb-8">
            <button className="bg-orange-primary text-white-primary w-full rounded-md py-4 duration-1000 hover:bg-orange-700  ">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartDetailsHeader;
