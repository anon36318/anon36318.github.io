import { useEffect, useState } from "react";
import ImageList from "./ImageList";

interface Props {
    title?: string;
    textColor?: string;
    humanImages: { url: string }[];
    garmentImages: { url: string }[];
    backgroundColor: string;
    ind: number;
}

const parseUrl2Name = (url: string) => {
    const split_len = url.split("/").length - 1
    return url.split("/")[split_len].split(".")[0];
};

const SelectImageBox = ({
    title,
    humanImages,
    garmentImages,
    backgroundColor,
    textColor,
    ind
}: Props) => {
  const [human, setHuman] = useState(humanImages[0].url);
  const [garment, setGarment] = useState(garmentImages[0].url);

  const [composedImg, setComposedImg] = useState<string>(
    `/inthewild/${ind}/${parseUrl2Name(garment)}/${parseUrl2Name(human)}.jpeg`
  );

  useEffect(() => {
    setComposedImg(`/inthewild/${ind}/${parseUrl2Name(garment)}/${parseUrl2Name(human)}.jpeg`);
  }, [human, garment, garmentImages, humanImages]);

  return (
    <div
      className={`flex flex-col justify-center items-center px-40 py-6`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={`font-semibold text-4xl ${title ? "px-5 pt-8" : ""}`}
        style={{ color: textColor }}
      >
        {title}
      </div>
      <div className="flex flex-col m-0 px-28 py-14">
        <div className="flex">
          <div className="mx-2 w-[100px]"></div>
          <div>
            <ImageList
              images={garmentImages}
              selected={garment}
              setSelected={setGarment}
              borderColor={backgroundColor}
              garment={true}
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <ImageList
              images={humanImages}
              selected={human}
              setSelected={setHuman}
              borderColor={backgroundColor}
              garment={false}
            />
          </div>
          <div className="pt-4 pl-4">
            <img alt={composedImg} src={composedImg} width={420} height={560} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectImageBox;
