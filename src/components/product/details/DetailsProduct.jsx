import CartIcon from "@/components/icons/CartIcon";
import { useCartDetails } from "@/context/useCartDetails";
import { useContext, useState } from "react";

export default ({ objectProduct }) => {
  const { addCartProducts } = useContext(useCartDetails);

  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const handleAddToCart = () => {
    addCartProducts({
      img: objectProduct.imagesSmall[0],
      id: objectProduct.id,
      discountPrice: objectProduct.price * (1 - objectProduct.discount),
      title: objectProduct.title,
      quantity: count || 1,
    });
    setCount(0);
  };

  return (
    <section className="container mx-auto px-4 md:px-0">
      <p className="text-orange-primary mb-3 font-bold uppercase tracking-wide">
        {objectProduct.subtitle}
      </p>
      <h2 className="mb-4 text-3xl font-bold">{objectProduct.title}</h2>
      <p className="text-dark-grayish-blue mb-5">{objectProduct.description}</p>

      <div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr] md:gap-1">
        <span className="text-3xl">
          ${(objectProduct.price * (1 - objectProduct.discount)).toFixed(2)}
        </span>
        <span className="bg-pale-orange text-orange-primary mr-auto rounded-md px-2 py-1">
          {objectProduct.discount * 100}%
        </span>
        <span className="text-grayish-blue text-right text-lg line-through md:col-span-2 md:text-left">
          ${objectProduct.price.toFixed(2)}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.7fr]">
        <div className="bg-light-grayish-blue col-span-3 flex items-baseline justify-between rounded-md px-5 py-2 pb-3 md:col-span-1 ">
          <button
            className="text-orange-primary text-3xl"
            onClick={decrementCount}
          >
            -
          </button>
          <span className="text-xl">{count}</span>
          <button
            className="text-orange-primary text-3xl"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <button
          className="bg-orange-primary text-white-primary col-span-3 flex justify-center gap-x-3 rounded-md py-3 transition-all hover:bg-orange-700 md:col-span-1"
          onClick={handleAddToCart}
        >
          <CartIcon fill="white" />
          <span> Add to cart</span>
        </button>
      </div>
    </section>
  );
};
