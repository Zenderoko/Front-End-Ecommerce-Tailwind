import CartIcon from "@/components/icons/CartIcon";

export default () => {
    return (
        <section className="container mx-auto px-4">
            <p className="text-orange-primary font-bold mb-3 uppercase tracking-wide">
                Sneaker Company
            </p>
            <h2 className="font-bold text-3xl mb-4">
                Fall Limited Edition Sneakers
            </h2>
            <p className="text-dark-grayish-blue mb-5">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
            </p>

            <div className="mb-5 grid grid-cols-3 font-bold gap-4 items-center">
                <span className="text-3xl">$125.00</span>
                <span className="bg-pale-orange text-orange-primary rounded-md mr-auto py-1 px-2">
                    50%
                </span>
                <span className="text-right text-grayish-blue text-lg line-through">
                    $250.00
                </span>
            </div>

            <div className="grid grid-cols-3 font-bold">
                <div className="col-span-3">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
                <button className="col-span-3 bg-orange-primary text-white-primary py-3 rounded-md flex gap-x-3 justify-center">
                    <CartIcon fill="white" />
                    <span> Add to cart</span>
                </button>
            </div>
        </section>
    );
};
