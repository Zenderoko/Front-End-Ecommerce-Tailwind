import NextIcon from "@/components/icons/NextIcon";
import PrevIcon from "@/components/icons/PrevIcon";
import { useEffect } from "react";
import { useRef, useState } from "react";

export default ({
  ARRAY_IMGS = [],
  ARRAY_IMG_SMALL = [],
  isOpenModal = false,
  handleclosemodal = null,
  handleOpenModal = () => {},
  ...props
}) => {
  const BtnSlider = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    isOpenModal && BtnSlider.current.classList.remove("md:hidden");
  }, [isOpenModal]);

  const handleClickNext = () => {
    index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
  };

  return (
    <section {...props}>
      {isOpenModal && (
        <button onClick={handleclosemodal} className="text-right md:col-span-4">
          Cerrar
        </button>
      )}
      <div className="relative col-span-4 ">
        <img
          src={ARRAY_IMGS[index]}
          alt="Slide-Product"
          className="aspect-[16/13] w-full object-cover md:aspect-[16/18] md:cursor-pointer md:rounded-md xl:aspect-[16/16] 2xl:max-h-[500px]"
          onClick={handleOpenModal}
        />

        <div
          ref={BtnSlider}
          className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-4 md:hidden"
        >
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>

      {ARRAY_IMG_SMALL.map((smallImg, i) => (
        <div
          onClick={() => setIndex(i)}
          key={i}
          className="relative cursor-pointer overflow-hidden rounded-md"
        >
          <img
            src={smallImg}
            alt=""
            className="hidden md:block md:rounded-md"
            key={smallImg}
          />
          <span
            className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
              i === index && "bg-[rgba(255,255,255,0.5)]"
            }`}
          ></span>
        </div>
      ))}
    </section>
  );
};
