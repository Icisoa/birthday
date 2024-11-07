import React from "react";
import { styled } from "styled-components";
import LogoComponent from "@/components/Main/LogoComponent";

function MainComponent() {
  return (
    <>
      <Wrapper>
        <LogoComponent />
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const Model = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
`;

export default MainComponent;
