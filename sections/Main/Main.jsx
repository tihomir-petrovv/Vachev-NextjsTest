import Image from "next/image";
import {
  StyledContainerColumn,
  
} from "./elements";
import { StyledDescription, StyledTitle } from "../Hero/elements";
import { Card } from "../../collections/Card/Card";

export const Main = ({ title, description, image, quotes }) => {
  return (
    <StyledContainerColumn height={"fit-content"} minHeight={"100vh"} marginTop={"5vh"}>
      <StyledContainerColumn>
        <StyledTitle lineHeight={"1rem"}>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledContainerColumn>
      <Card image={image} quotes={quotes}/>
    </StyledContainerColumn>
  );
};
