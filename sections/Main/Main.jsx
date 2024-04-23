import Image from "next/image";
import { StyledContainer, StyledTitle } from "./elements";

export const Main = ({title}) => {
  return (
  <StyledContainer>
    <StyledTitle>{title}</StyledTitle>
  </StyledContainer>
  );
};
