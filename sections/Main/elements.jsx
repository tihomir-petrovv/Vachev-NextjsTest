import styled from "styled-components";
import {
  SectionBigHeading,
  SectionSubheading,
  SectionContainerColumn,
  SectionMediumHeading,
} from "~/components";

export const StyledContainerColumn = styled(({ height, ...props }) => (
  <SectionContainerColumn {...props} />
))`
  align-items: center;
`;

export const StyledSecondTitle = styled((props) => <SectionMediumHeading {...props} />)`
  margin: 0;
  color: black;
  text-align: left;
  align-self: start;
  line-height: 0.5rem;
  font-size: 1.2rem;
`;
