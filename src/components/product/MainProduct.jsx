import DetailProducts from "./DetailProducts";

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>Galeria de Imagenes</section>
            <DetailProducts />
        </main>
    );
};

export default MainProduct;
