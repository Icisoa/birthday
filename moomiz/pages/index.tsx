import { useEffect, useState } from "react";
import styled from "styled-components";
import MainComponent from "@/components/Main/MainComponent";
import IntroComponent from "@/components/Main/IntroComponent";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsVisible(true);
      localStorage.setItem('hasVisited', 'true');
    }

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000); 

    return () => {
      clearTimeout(timeout); 
    };
  }, []);

  return (
    <Wrapper>
      <MainComponent />
    </Wrapper>
  );
}

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
  /* background-color: ${({ theme }) => theme.color.background}; */
`