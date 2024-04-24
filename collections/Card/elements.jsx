import styled from "styled-components";
import {
  SectionSubheading,
  SectionContainerColumn,
  SectionMediumHeading,
} from "~/components";

export const StyledCardContainerColumn = styled(({ height, ...props }) => (
  <SectionContainerColumn {...props} />
))`
  align-items: ${(props) => props.alignItems || "center"};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  margin-top: ${(props) => props.marginTop};
  justify-content: ${(props) => props.justifyContent || "center"};
  flex-wrap: wrap;
  flex-direction: ${(props) => props.flexDirection || "column"};
  width: ${(props) => props.width || "100%"};
  gap: ${(props) => props.gap || ""};
`;

export const StyledCardTitle = styled((props) => (
  <SectionMediumHeading {...props} />
))`
  margin: 0;
  color: black;
  text-align: left;
  align-self: start;
  line-height: 0.3rem;
  font-size: 1.2rem;
`;

export const StyledCardDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0.1rem 0 1rem 0;
  color: black;
  text-align: left;
  align-self: start;
  line-height: 1.2rem;
  font-size: 1rem;
`;

export const StyledCardImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 15rem;
  height: 100%;
`;

export const StyledCardOptionBox = styled(({ ...props }) => <div {...props} />)`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  gap: ${(props) => props.gap || "1rem"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth || "25rem"};
  height: ${(props) => props.height || "fit-content"};
  padding: ${(props) => props.padding || "1rem"};
  background-color: ${(props) => props.backgroundColor || "white"};
  border-radius: ${(props) => props.borderRadius || "15px"};
  cursor: ${(props) => props.cursor || "auto"};
`;
