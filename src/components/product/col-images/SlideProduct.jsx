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
        <button onClick={handleclosemodal} className="md:col-span-4 text-right">
          Cerrar
        </button>
      )}
      <div className="col-span-4 relative ">
        <img
          src={ARRAY_IMGS[index]}
          alt="Slide-Product"
          className="aspect-[16/13] w-full md:aspect-[16/16] md:rounded-md md:cursor-pointer"
          onClick={handleOpenModal}
        />

        <div
          ref={BtnSlider}
          className="absolute left-0 top-1/2 -translate-y-1/2 flex justify-between w-full px-4 md:hidden"
        >
          <button
            className="h-10 w-10 bg-white rounded-full grid place-items-center"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className="h-10 w-10 bg-white rounded-full grid place-items-center"
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
          className="relative overflow-hidden rounded-md cursor-pointer"
        >
          <img
            src={smallImg}
            alt=""
            className="hidden md:block md:rounded-md"
            key={smallImg}
          />
          <span
            className={`absolute hover:bg-[rgba(255,255,255,0.5)] h-full w-full top-0 ${
              i === index && "bg-[rgba(255,255,255,0.5)]"
            }`}
          ></span>
        </div>
      ))}
    </section>
  );
};
