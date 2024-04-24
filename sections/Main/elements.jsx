import styled from "styled-components";
import {
  SectionBigHeading,
  SectionSubheading,
  SectionContainerColumn,
  SectionMediumHeading,
} from "~/components";

export const StyledRootContainerColumn = styled(({ height, ...props }) => (
  <SectionContainerColumn {...props} />
))`
  align-items: center;
  margin-top: 3rem;
  min-height: 100vh;
`;

export const StyledContainerColumn = styled(({ height, ...props }) => (
  <SectionContainerColumn {...props} />
))`
  align-items: center;
`;
export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  line-height: 1rem;
  font-size: 2.5rem;
`;

export const StyledSecondTitle = styled((props) => (
  <SectionMediumHeading {...props} />
))`
  margin: 0;
  color: black;
  text-align: left;
  align-self: start;
  line-height: 0.5rem;
  font-size: 1.2rem;
`;
