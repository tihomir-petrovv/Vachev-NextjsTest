import Image from "next/image";
import { StyledContainer, StyledContainerColumn, StyledDescription, StyledTitle } from "./elements";

export const Main = ({ title, description }) => {
  return (
    <StyledContainer>
      <StyledContainerColumn>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledContainerColumn>
    </StyledContainer>
  );
};
