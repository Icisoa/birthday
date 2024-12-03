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
    "정수가 가보지 않은 나라는?",
    "처음 빌려줬던 책 이름은?",
    "정수네 집 막내 이름은?",
    "한라산 등반에 성공했던 날짜는?",
    "파주 만두 칼국수 맛집 이름은? ",
    "21년도 6월에 다니던 회사 이름은?",
    "나랑 여행 안 가본 지역은?",
  ];

  const answer = [
    "일본",
    "다시, 나는 희망의 증거가 되고 싶다",
    "땡이",
    "8월 30일",
    "밀밭식당",
    "INVENIA",
    "부산",
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
            <Title className="Endeavoring">방탈출 게임🏃‍♀️‍➡️</Title>
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
