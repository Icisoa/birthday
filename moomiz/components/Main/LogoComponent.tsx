import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import Image from "next/image";
import IntroComponent from "./IntroComponent";
import ExitComponent from "./ExitComponent";
import PaperComponents from "./PaperComponents";

function LogoComponent() {
  const [page, setPage] = useState<number>(0);
  const question = [
    "ㄱㅇㅇ의 최애 동물은?",
    "나한테 빌려줬던 책 이름은?",
    "ㄱㅇㅇ의 최애 할맥 메뉴",
    "ㄱㅇㅇ의 뜻으로 가장 알맞은 것을 고르시오",
    "나와 함께 간 오유미당에서 영우가 먹은 메뉴는?",
    "제주도에서 영우가 가장 맛있게 먹은 음식은?",
    "본인의 가장 매력적인점을 고르자면?",
  ];

  const answer = [
    "고양이",
    "인간실격",
    "버갈감",
    "귀여워",
    "마라쌀국수",
    "열무국수",
    "깜찍함",
  ];

  // 배경 색상을 계산하는 함수
  const getBackgroundColor = (page: number) => {
    if (page == 9) {
      return `#ffffff`
    } else {
      const colorValue = Math.min(255, 50 + page * 25); // 페이지에 따라 색상 값 조정
      return `rgb(${colorValue}, ${colorValue}, ${colorValue})`; // 흰색으로 밝아짐
    }
  };

  return (
    <Wrapper backgroundColor={getBackgroundColor(page)}>
      {page == 0 && (
        <>
          <TitleContainer>
            <Title className="Endeavoring">🎂생일 퀴즈쇼</Title>
          </TitleContainer>
          <Btn onClick={() => setPage(1)}>start</Btn>
        </>
      )}
      {page > 0 && page < 8 && (
        <>
          <IntroComponent
            question={question}
            answer={answer}
            page={page}
            setPage={setPage}
          />
        </>
      )}
      {page == 8 && (
        <>
          <ExitComponent setPage={setPage} />
        </>
      )}
      {page == 9 && (
        <>
          <PaperComponents />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ backgroundColor: string }>`
  /* scroll-snap-align: start; */
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor}; // 동적으로 배경색 설정

  img {
    position: absolute;
    top: 0;
    left: 0;
  }
  .heart {
    animation: bounce_frames 1.4s infinite;
    animation-direction: alternate;
    top: 20%;
    left: 10%;
  }
  .star {
    animation: bounce_frames 1.2s infinite;
    animation-direction: alternate;
    top: 50%;
    left: 75%;
  }
  .clover {
    animation: bounce_frames 1s infinite;
    animation-direction: alternate;
    top: 65%;
    left: 32%;
  }
  .cloud {
    animation: bounce_frames 1.6s infinite;
    animation-direction: alternate;
    top: 10%;
    left: 50%;
  }
  @keyframes bounce_frames {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 50px, 0);
    }
  }
 
`;

const Btn = styled.div`
  display: flex;
  width: 20vw;
  height: 10vh;
  background-color: pink;
  border-radius: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 5vh;
  font-family: Cafe24ClassicType-Regular;
  font-size: 4vh;
  @media only screen and (max-width: 600px) {
    /* justify-content: flex-start; */
   width: 50vw;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const TextList = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  position: relative;
  top: -250px;
`;
const Text = styled.div`
  width: 150px;
  height: 150px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding-left: 2%;
  bottom: 50%;
  width: 100%;
  .right {
    margin-left: 60%;
  }
  animation: fadein 3s;
  animation-fill-mode: forwards;
  @keyframes fadein {
    /* 효과를 동작시간 동안 0 ~ 1까지 */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateY(40%);
    }
  }
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 98px;
  margin: 1rem;
  font-family: Cafe24ClassicType-Regular;
  color: white;
  /* text-shadow: 2px 2px 2px gray; */
  font-weight: normal;
  font-style: normal;
  @media only screen and (max-width: 600px) {
    /* justify-content: flex-start; */
    padding-left: 4vw;
  }
`;
const Point = styled.span`
  color: ${({ theme }) => theme.color.point};
  font-family: Cafe24ClassicType-Regular;
  font-size: 128px;
  text-shadow: 2px 2px 2px gray;
  /* margin-left: 2rem; */
  margin-right: 3rem;
`;

// const Flower = styled.div`
//   width:300px;
//   height: 300px;
//   display: flex;
//   flex-wrap: wrap;
//   z-index: 10;
//   animation: rotate_image 15s linear infinite;transform-origin: 50% 50%;

//   &:hover{
//     animation-play-state: paused;
//   }
//   .flower1:hover{
//     animation: fadeout 1s;
//     animation-fill-mode: forwards;

//   }

//   .flower2 {
//     transform: scaleX(-1);
//   }
//   .flower2:hover{
//     animation: fadeout 1s;
//     animation-fill-mode: forwards;
//   }
//   .flower3 {
//     transform: scaleY(-1);
//   }

//   .flower3:hover{
//     animation: fadeout 1s;
//     animation-fill-mode: forwards;
//   }

//   .flower4:hover{
//     animation: fadeout 1s;
//     animation-fill-mode: forwards;
//   }

//   @keyframes fadeout {
//     0%{
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//   }
//   }
//   @keyframes rotate_image{
//     100% {
//         transform: rotate(360deg);
//     }
//   }
// `
// const Petal = styled.div`

// `

export default LogoComponent;
