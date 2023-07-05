import styled from "styled-components";

export const StyledButton = styled.button`
  appearance: none;
  border: none;
  color: #784f41;
  background: var(--color-water-10);
  font-size: larger;
  font-weight: bold;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
  &:hover {
    color: #2b9348
  }
`;