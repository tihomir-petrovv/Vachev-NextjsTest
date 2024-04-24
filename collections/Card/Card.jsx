import Image from "next/image";
import {
  StyledCardDescription,
  StyledCardImageContainer,
  StyledCardTitle,
  StyledCardOptionBox,
  StyledCardContainerColumn,
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
    <StyledCardContainerColumn
      style={{
        gap: "2rem",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: "2rem",
        flexWrap: "wrap",
      }}
    >
      <StyledCardImageContainer
        style={{
          width: "15rem",
          height: "100%",
        }}
      >
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledCardImageContainer>
      <StyledCardOptionBox style={{
        maxHeight:"fit-content",
        gap:"1rem",
      }}>
        {quotes.map((quote, index) => {
          const selectedImage = getImageForIndex(index);
          return (
            <StyledCardOptionBox
              style={{
                maxWidth: "25rem",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "fit-content",
                padding: "0.3rem",
                backgroundColor: "#f5f5f1",
                borderRadius: "15px",
                cursor: "pointer",
                border:
                  selectedBoxIndex === index ? "2px solid #0388fc" : "none",
              }}
              key={index}
              onClick={() => setSelectedBoxIndex(index)}
            >
              <StyledCardImageContainer style={{
                width: "4rem",
                height: "fit-content"
              }}>
                <Image
                  layout="responsive"
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={selectedImage.width}
                  height={selectedImage.height}
                />
              </StyledCardImageContainer>
              <StyledCardOptionBox
                style={{
                  maxWidth: "25rem",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "fit-content",
                  backgroundColor: "#f5f5f1",
                  cursor: "pointer",
                }}
              >
                <StyledCardTitle
                  style={
                    selectedBoxIndex === index
                      ? { color: "#0388fc", textDecoration: "underline" }
                      : {}
                  }
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
            </StyledCardOptionBox>
          );
        })}
      </StyledCardOptionBox>
    </StyledCardContainerColumn>
  );
};
