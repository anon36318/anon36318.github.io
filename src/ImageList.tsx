import { Dispatch, SetStateAction, MouseEventHandler } from "react";

interface Props {
  images: { url: string }[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  borderColor: string;
  garment: boolean;
}

const ImageList = ({
  images,
  selected,
  setSelected,
  borderColor,
  garment,
}: Props) => {
  const handleClickImg: MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as HTMLImageElement;
    setSelected(target.id);
  };

  return (
    <div
      className={`flex ${
        garment ? "w-[420px] pl-4" : "flex-col h-[560px] pt-4"
      } ${images.length === 4 ? "justify-between" : "justify-evenly"}`}
    >
      {images.map((image) => (
        <img
          className={`${
            garment ? "my-2" : "mx-2"
          } hover:scale-105 cursor-pointer border-1.5 border-solid ${
            selected === image.url
              ? "scale-105 opacity-100"
              : "opacity-50 hover:opacity-90"
          }`}
          key={image.url}
          alt={image.url}
          src={image.url}
          width={90}
          height={120}
          style={
            selected === image.url
              ? { borderColor: garment? "red" : "blue"}
              : { borderColor: borderColor }
          }
          id={image.url}
          onClick={handleClickImg}
        />
      ))}
    </div>
  );
};

export default ImageList;
