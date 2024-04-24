import { StyledContainerColumn } from "./elements";
import { StyledDescription, StyledTitle } from "../Hero/elements";
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
    <StyledContainerColumn
      style={{
        height: "fit-content",
        minHeight: "100vh",
        marginTop: "5vh",
      }}
    >
      <StyledContainerColumn>
        <StyledTitle style={{
          lineHeight: "1rem",
        }}>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledContainerColumn>
      <Card
        image = {image}
        quotes = {quotes}
        briefImage = {briefImage}
        searchImage = {searchImage}
        pitchImage = {pitchImage}
      />
    </StyledContainerColumn>
  );
};
