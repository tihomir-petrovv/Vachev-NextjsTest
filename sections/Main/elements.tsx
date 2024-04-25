import React from "react";
import styled from "styled-components";
import {
  SectionBigHeading,
  SectionSubheading,
  SectionContainerColumn,
  SectionMediumHeading,
} from "../../components";

interface StyledRootContainerColumnProps {
  height?: string;
  props?: string;
}

export const StyledRootContainerColumn = styled(({ height, ...props }: StyledRootContainerColumnProps) => (
  <SectionContainerColumn {...props} />
)) <StyledRootContainerColumnProps>`
  align-items: center;
  margin-top: 3rem;
  min-height: 100vh;
`;

export const StyledContainerColumn = styled(({ height, ...props }: StyledRootContainerColumnProps) => (
  <SectionContainerColumn {...props} />
)) <StyledRootContainerColumnProps>`
  align-items: center;
`;
export const StyledTitle = styled(({ ...props }: StyledRootContainerColumnProps) => <SectionBigHeading {...props} />) <StyledRootContainerColumnProps>`
  margin: 0;
  color: black;
  line-height: 1rem;
  font-size: 2.5rem;
`;

export const StyledSecondTitle = styled(({ ...props }: StyledRootContainerColumnProps) => (
  <SectionMediumHeading {...props} />
))<StyledRootContainerColumnProps>`
  margin: 0;
  color: black;
  text-align: left;
  align-self: start;
  line-height: 0.5rem;
  font-size: 1.2rem;
`;
