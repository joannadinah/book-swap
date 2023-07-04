import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ccd5ae;
  color: #784f41;
  font-weight: 900;
  font-size: 3em;
  margin-bottom: 0;
  padding: 20px;
  text-align: center;
  z-index: 1;
  
`;

export default function Header() {
  return <Headline>BOOK SWAP</Headline>;
}