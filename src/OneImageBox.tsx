interface Props {
  image: string;
  backgroundColor: string;
}

const OneImageBox = ({ image, backgroundColor }: Props) => {
  return (
    <>
      <div
        className="flex justify-center items-center relative pt-10px"
        style={{ backgroundColor: backgroundColor }}
      >
        <img loading="lazy" src={image} width={1050} />
      </div>
    </>
  );
};
export default OneImageBox;
