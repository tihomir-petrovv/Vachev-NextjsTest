import styled from "styled-components";

export const StyledSectionContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  display: flex;
  flex-direction: row;
  max-width: 1920px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
`;

export const StyledSectionContainerColumn = styled(
  ({ ...props }) => <div {...props} />
)`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
`;
