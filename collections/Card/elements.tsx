import React from "react";
import styled from "styled-components";
import {
  SectionSubheading,
  SectionContainerColumn,
  SectionMediumHeading,
} from "../../components";

interface StyledMainCardContainerColumn {
  height?: string;
  props?: string;
}

interface StyledCardContainerColumn {
  children: React.ReactNode;
  onClick?: () => void;
  index: number;
  selectedBoxIndex?: number | null;
  height?: string;
  props?: string;
}

export const StyledMainCardContainerColumn = styled(({ height, ...props }: StyledMainCardContainerColumn) => (
  <SectionContainerColumn {...props} />
))<StyledMainCardContainerColumn>`
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;
export const StyledCardContainerColumn = styled(
  ({ selectedBoxIndex, index, height, ...props }: StyledCardContainerColumn) => (
    <SectionContainerColumn {...props} />
  )
)<StyledCardContainerColumn>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 25rem;
  height: fit-content;
  padding: 1rem;
  background-color: #f5f5f1;
  border-radius: 15px;
  cursor: pointer;
  border: ${(props) =>
    props.selectedBoxIndex === props.index && "2px solid #0388fc"};
`;
export const StyledCardTitle = styled(({selectedBoxIndex, index, ...props}) => (
  <SectionMediumHeading {...props} />
))`
  margin: 0;
  color: black;
  text-align: left;
  align-self: start;
  line-height: fit-content;
  font-size: 1.2rem;
  ${(props) =>
    props.selectedBoxIndex === props.index
      ? { color: "#0388fc", textDecoration: "underline" }
      : {}};
`;

export const StyledCardDescription = styled(({ ...props }) => (
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
  align-self: center;
`;

export const StyledCardBoxesImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 4rem;
  height: fit-content;
`;

export const StyledMainCardOptionBox = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 25rem;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem;
  max-height: fit-content;
`;

export const StyledCardOptionBox = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 25rem;
  height: fit-content;
  padding: 0.3rem;
  background-color: #f5f5f1;
  border-radius: 15px;
`;
