import { StyledContainerColumn, StyledRootContainerColumn, StyledTitle } from "./elements";
import { StyledDescription } from "../Hero/elements";
import { Card } from "../../collections/Card/Card";

export const Main = ({
  title,
  description,
  image,
  quotes,
  briefImage,
  searchImage,
  pitchImage,
}) => {
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
