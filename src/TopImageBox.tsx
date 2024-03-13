import { MouseEventHandler, useEffect, useState } from "react";

interface Props {
    images: { url: string }[];
    title?: string;
    backgroundColor: string;
    textColor?: string;
}

const TopImageBox = ({ images, title, backgroundColor, textColor }: Props) => {
  const [rotation, setRotation] = useState(0);
  const [sequence, setSequence] = useState(0);
  const [reset, setReset] = useState(false);
  let manualDelay: number;

  useEffect(() => {
    let delay: number;
    const intervalRotation = window.setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 180) % 360);
    }, 3000);

    const intervalSequence = window.setInterval(() => {
      delay = window.setTimeout(() => {
        setSequence((prev) => (prev + 1) % images.length);
      }, 500);
    }, 3000);

    return () => {
      clearInterval(intervalRotation);
      clearInterval(intervalSequence);
      clearTimeout(delay);
    };
  }, [reset]);

  useEffect(() => {
    return () => {
      clearTimeout(manualDelay);
    };
  }, []);

  const rotationStyle = {
    transform: `rotateY(${rotation}deg)`,
    transition: "transform 1.0s ease-in-out",
  };

  const handleClickImg: MouseEventHandler<HTMLImageElement> = () => {
    setReset((prev) => !prev);

    manualDelay = window.setTimeout(() => {
      setSequence((prev) => (prev + 1) % images.length);
    }, 500);

    setRotation((prevRotation) => (prevRotation + 180) % 360);
  };

  return (
    <div className="text-center" style={{ backgroundColor: backgroundColor }}>
      <div
        className="font-semibold text-4xl px-5 pt-8"
        style={{ color: textColor }}
      >
        {/* {title} */}
      </div>
      <img
        onClick={handleClickImg}
        src={images[sequence].url}
        alt="representation"
        style={{ ...rotationStyle, width: "300px", height: "400px" }}
          />
          <div className="text-gray-5">
          {title}
        </div>

    </div>
  );
};

export default TopImageBox;
