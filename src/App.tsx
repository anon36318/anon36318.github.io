import TextBox from "./TextBox";
import { WindowSizeContextProvider } from "./contexts/WindowSizeContext";
import Markdown from "./Markdown";
import AbstractBox from "./AbstractBox";
import {
  bgColor,
  tldr,
  abstract,
  pipelineImage,
  approach,
  inTheWild,
  teaserImages,
  humanImages,
  garmentImages,
  qualCmpImages,
  qualImages,
  qual,
  qualCmp
} from "./const";
import Organization from "./Organization";
import OneImageBox from "./OneImageBox";
import TopImageBox from "./TopImageBox";
import SlideSelectImageBox from "./SlideSelectImageBox";
import SlideImageBox from "./SlideImageBox";

function App() {
  return (
    <>
      <WindowSizeContextProvider>
        <div className="w-screen h-screen min-w-[1400px]">

          {/* FIXME: Teaser */}
          <TopImageBox
            images={teaserImages}
            backgroundColor={"white"}
            title={`Human: blue, Garment: red`}
          />
          {/* FIXME: Title, Author */}
          <TextBox
            title={
              <>
                Improving Diffusion Models for
                <br />
                Authentic Virtual Try-on in the Wild
              </>
            }
            backgroundColor={"white"}
            textColor={"black"}
            titleFontSize={"text-5xl"}
          >
            <Organization />
          </TextBox>
          {/* FIXME: TL;DR */}
          <TextBox
            title={`TL;DR: ${tldr}`}
            backgroundColor={bgColor}
            textColor={"white"}
            titleFontSize={"text-3xl"}
          />
          {/* FIXME: Abstract */}
          <AbstractBox
            title={"Abstract"}
            backgroundColor={"white"}
            textColor={"black"}
          >
            <Markdown text={abstract} />
          </AbstractBox>

          {/* FIXME: Method */}
          <TextBox
            title={"Approach"}
            backgroundColor={bgColor}
            textColor={"white"}
          >
            <Markdown text={approach} />
          </TextBox>
          <OneImageBox image={pipelineImage} backgroundColor={"white"} />

          {/* FIXME: Qualitative Comparison */}
          <TextBox
            title={"Multiple People on Same Garment"}
            backgroundColor={bgColor}
            textColor={"white"}
          >
            <Markdown text={qual} />
          </TextBox>
          <SlideImageBox images={qualImages} backgroundColor={"white"}/>
          
          {/* FIXME: Qualitative Results */}
          <TextBox
            title={"Virtual Try-on in the Wild"}
            backgroundColor={bgColor}
            textColor={"white"}
          >
            <Markdown text={inTheWild} />
          </TextBox>
          <SlideSelectImageBox humans={humanImages} garments={garmentImages} backgroundColor={"white"} />

          {/* FIXME: Qualitative Comparison */}
          <TextBox
            title={"Qualitative Comparisons"}
            backgroundColor={bgColor}
            textColor={"white"}
          >
            <Markdown text={qualCmp} />
          </TextBox>
          <SlideImageBox images={qualCmpImages} backgroundColor={"white"}/>

          <TextBox
            title={"ECCV 2024 Submission"}
            backgroundColor={bgColor}
            textColor={"white"}
            last={true}
          />
        </div>
      </WindowSizeContextProvider>
    </>
  );
}

export default App;
