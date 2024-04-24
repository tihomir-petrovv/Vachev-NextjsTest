import Image from "next/image";
import {
  StyledCardDescription,
  StyledCardImageContainer,
  StyledCardTitle,
  StyledCardOptionBox,
  StyledCardContainerColumn,
  StyledMainCardContainerColumn,
  StyledMainCardOptionBox,
  StyledCardBoxesImageContainer,
} from "./elements";
import { useState } from "react";

export const Card = ({
  image,
  quotes,
  briefImage,
  searchImage,
  pitchImage,
}) => {
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(null);

  const boldPhrases = (string, phrases) => {
    let result = string;
    phrases.forEach((phrase) => {
      result = result.split(phrase).join(`|${phrase}|`);
    });
    return result
      .split("|")
      .map((part, index) =>
        phrases.includes(part) ? <strong key={index}>{part}</strong> : part
      );
  };

  const getImageForIndex = (index) => {
    if (index === 0) {
      return briefImage;
    } else if (index === 1) {
      return searchImage;
    } else if (index === 2) {
      return pitchImage;
    }
    return null;
  };

  return (
    <StyledMainCardContainerColumn>
      <StyledCardImageContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledCardImageContainer>
      <StyledMainCardOptionBox>
        {quotes.map((quote, index) => {
          const selectedImage = getImageForIndex(index);
          return (
            <StyledCardContainerColumn
              index={index}
              selectedBoxIndex={selectedBoxIndex}
              key={index}
              onClick={() => setSelectedBoxIndex(index)}
            >
              <StyledCardBoxesImageContainer>
                <Image
                  layout="responsive"
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={selectedImage.width}
                  height={selectedImage.height}
                />
              </StyledCardBoxesImageContainer>
              <StyledCardOptionBox>
                <StyledCardTitle
                selectedBoxIndex={selectedBoxIndex}
                index={index}
                >
                  {quote.title}
                </StyledCardTitle>
                <StyledCardDescription>
                  {" "}
                  {boldPhrases(quote.desc, [
                    "brief writing or simple guidance",
                    "criteria matching",
                    "pitch management",
                  ])}
                </StyledCardDescription>
              </StyledCardOptionBox>
            </StyledCardContainerColumn>
          );
        })}
      </StyledMainCardOptionBox>
    </StyledMainCardContainerColumn>
  );
};
