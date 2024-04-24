import React from "react";
import { StyledContainerColumn, StyledRootContainerColumn, StyledTitle } from "./elements.tsx";
import { StyledDescription } from "../Hero/elements";
import { Card } from "../../collections/Card/Card.tsx";

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface MainProps {
  title: string;
  description: string;
  image: Image;
  quotes: Array<{title: string; desc: string;}>;
  briefImage: Image;
  searchImage: Image;
  pitchImage: Image;
}

export const Main = ({
  title,
  description,
  image,
  quotes,
  briefImage,
  searchImage,
  pitchImage,
}: MainProps) => {
  return (
    <StyledRootContainerColumn>
      <StyledContainerColumn>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledContainerColumn>
      <Card
        image={image}
        quotes={quotes}
        briefImage={briefImage}
        searchImage={searchImage}
        pitchImage={pitchImage}
      />
    </StyledRootContainerColumn>
  );
};
