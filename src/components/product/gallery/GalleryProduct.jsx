import { useState } from "react";
import SlideProduct from "@/components/product/gallery/SlideProduct";
import ModalProduct from "@/components/product/gallery/SlideProduct";
export default ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => window.innerWidth > 767 && setIsOpenModal(true);

  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <SlideProduct
        ARRAY_IMGS={ARRAY_IMGS}
        ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
        className="grid md:grid-cols-4 md:gap-4"
        handleOpenModal={handleOpenModal}
      />
      {isOpenModal && (
        <>
          <ModalProduct
            ARRAY_IMGS={ARRAY_IMGS}
            ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
            isOpenModal={isOpenModal}
            className=" hidden md:absolute md:left-1/2 md:top-1/2 md:z-10 md:grid md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2 md:grid-cols-4 md:gap-4 "
            handleclosemodal={handleCloseModal}
          />
          <span
            className=" fixed left-0 top-0 h-full w-full bg-black/50 "
            onClick={handleCloseModal}
          ></span>
        </>
      )}
    </>
  );
};
