import styled from "styled-components";
import {
  Button,
  SectionBigHeading,
  SectionSubheading,
  SectionContainer,
  SectionContainerColumn
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
`;

export const StyledContainerColumn = styled(({ height, ...props }) => (
  <SectionContainerColumn {...props} />
))`
  align-items: center;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 1.563rem 0 0;
`;
