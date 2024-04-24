import styled from "styled-components";
import {
  SectionSubheading,
  SectionContainerColumn,
  SectionMediumHeading,
} from "~/components";

export const StyledCardContainerColumn = styled(({ height, ...props }) => (
  <SectionContainerColumn {...props} />
))`
  align-items: center;
`;

export const StyledCardTitle = styled((props) => (
  <SectionMediumHeading {...props} />
))`
  margin: 0;
  color: black;
  text-align: left;
  align-self: start;
  line-height: fit-content;
  font-size: 1.2rem;
`;

export const StyledCardDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0.1rem 0 0;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 25rem;
  height: 100%;
  padding: 1rem;
`;
