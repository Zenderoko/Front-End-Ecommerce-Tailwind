import DetailProducts from "@/components/product/DetailProducts";
import SlideProduct from "@/components/product/SlideProduct";

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideProduct />
            <DetailProducts />
        </main>
    );
};

export default MainProduct;
