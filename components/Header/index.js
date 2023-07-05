import styled from "styled-components";

const Headline = styled.h1`
  position: sticky;
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
  text-shadow: 2px 4px rgb(248, 187, 187), 0 0 1em rgb(172, 172, 185),
    0 0 0.2em rgb(192, 192, 200);
  
`;

export default function Header() {
  return <Headline>BOOK SWAP</Headline>;
}