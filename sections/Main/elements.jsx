import styled from "styled-components";
import {
  Button,
  SectionBigHeading,
  SectionSubheading,
  SectionContainer,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;
