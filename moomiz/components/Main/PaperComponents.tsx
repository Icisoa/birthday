import React, { use, useState } from 'react'
import { styled } from "styled-components"
import Image from "next/image"
import heart from "@/public/heart.png"
import ballon from "@/public/cat.png"
import gift from "@/public/bread.png"
import geojedo from "@/public/geojedo.png"
import choonsik from "@/public/choonsik.png"
import Kumoh from "@/public/photo.jpg"
import Modal from './Modal'
import confetti from 'canvas-confetti'


function PaperComponents() {
    const birthdayMsg = '안녕하심까 고양이씨… 권주임 권작가 아기새 어쩌구… 입니다. 퀴즈 풀 때 이게 뭔가 싶었나여? 제가 개발자 친구와 지피티의 조력을 통해 만들어낸 페이지입니다. 솔직히 퀴즈 풀때 이거 내가 어케앎? 하면서 푼거 있다 없다? 맨 앞으로 돌아가서 솔직히 열받았다 아니다? 정답보고 살짝 어리둥절하길 원했는데 어떨지 모르겠네여 ㅎ.ㅎ. 근데 질문 만들기 솔직히 힘들었음. 나 아직 김영우 그렇게 까진 잘 모르나바여… 더 많이 알려줘라… 무튼 생일날 못 만날 수도 있을 것 같아서 이거 만들어주면 그래도 좋을 것 같아가지고 하려고 했는데 다행히 만나게 되었네여 넘신난당. 생일 제가 젤 먼저 그리고 제일 축하함 진짜임 ~~~ 👽 매일같이 보다가 못보니까 넘 힘드네예… 이것도 몇시간 안남았다 ! 어쩔 수 없이 한정된 시간이지만 알차게 놀아봐여 빨리 다 나아서 놀이공원도 가고 ! 소고기도 묵고 ! 합시다. 생일축하해🐈'
    const geojeMsg = '삼각대들고 또 사진찍으러 가자구. 인생네컷도 같이 찍어줘라!'
    const introMsg = '귀여운 춘식이와 김춘식이'
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [msg, setMsg] = useState('')
    const [name, setName] = useState('')
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var skew = 1;


    const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    }

    (function frame() {
        var timeLeft = animationEnd - Date.now();
        var ticks = Math.max(200, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);

        confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                // since particles fall down, skew start toward the top
                y: (Math.random() * skew) - 0.2
            },
            colors: ['#f8b0f4',],
            shapes: ['circle'],
            gravity: randomInRange(0.4, 0.6),
            scalar: randomInRange(0.4, 1),
            drift: randomInRange(-0.4, 0.4)
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    }());


    const msgHandler = (img: string) => {
        setIsModalOpen(true)
        switch (img) {
            case 'heart':
                setMsg(introMsg)
                                setName('💜')
                break
            case 'ballon':
                setMsg(geojeMsg)
                                setName('❤️')
                break
            case 'gift':
                setMsg(birthdayMsg)
                setName('💙')
                break

        }
    }

    return (<Wrapper>
        <Modal isOpen={isModalOpen} onClose={closeModal} name={name}>
            {name =='❤️'&& <Image className='땡이' src={geojedo} alt='ddang' width={280} height={500}/>}
            {name =='💜'&& <Image className='오늘의 주인공' src={choonsik} alt='ddang' width={280} height={500}/>}
            {msg}
        </Modal>
        <Image
            className='heart'
            src={heart}
            alt='하트'
            width={240}
            height={234}
            onClick={() => msgHandler('heart')}
            />
        <Image
            className='ballon'
            src={ballon}
            alt='cat'
            width={210}
            height={320}
            onClick={() => msgHandler('ballon')}
        />
        <Title>Happy birthday<br/> to <br/>🎂YeongWoo🎂</Title>
        <Image
            className='gift'
            src={gift}
            alt='bread'
            width={240}
            height={234}
            onClick={() => msgHandler('gift')}
        />
    </Wrapper>
    )
}

const modalWrapper = styled.div`
    width: 60vw;
    height: 50vw;
`

const Wrapper = styled.div`
  /* scroll-snap-align: start; */
  display: flex;
  height: 100vh;
  justify-content:space-evenly;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    /* justify-content: flex-start; */
   width: 100vw;
   height: 100vh;
  }
  

  img{
    
    
      /* animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
      animation-iteration-count: 4; */
    position: absolute;
    top:0;
    left: 0;
  }
  .heart {
    animation: bounce_frames 1.4s infinite;
    animation-direction: alternate;
    top: 20%;
    left: 10%;
    @media only screen and (max-width: 600px) {
    /* justify-content: flex-start; */
        width: 100px;
        height: 100px;
  }
    
    
  }
  .star{
    animation: bounce_frames 1.2s infinite;
    animation-direction: alternate;
    top: 80%;
    left: 70%;
    @media only screen and (max-width: 600px) {
    /* justify-content: flex-start; */
        width: 150px;
        height: 150px;
        left: 50%;
  }
  }
  .clover{
    animation: bounce_frames 1s infinite;
    animation-direction: alternate;
    top:65%;
    left: 12%;
    @media only screen and (max-width: 600px) {
    /* justify-content: flex-start; */
        width: 150px;
        height: 150px;
  }
  }
  .cloud {
    animation: bounce_frames 1.6s infinite;
    animation-direction: alternate;
    top:10%;
    left: 20%;
    @media only screen and (max-width: 600px) {
    /* justify-content: flex-start; */
        width: 150px;
        height: 150px;
        top:30%;
        left: 0%;
  }
  }
  .gift {
    animation: bounce_frames 1.8s infinite;
    animation-direction: alternate;
    top:6%;
    left: 30%;
    @media only screen and (max-width: 600px) {
    /* justify-content: flex-start; */
        width: 150px;
        height: 150px;
        left: 45%;
  }
  }
  .ballon {
    animation: bounce_frames 1.3s infinite;
    animation-direction: alternate;
    top:5%;
    left: 80%;
    @media only screen and (max-width: 600px) {
    /* justify-content: flex-start; */
        width: 150px;
        height: 200px;
        left: 35%;
        top:60%

  }
  }
  @keyframes bounce_frames {
      from {transform: translate3d(0, 0, 0);}
      to {transform: translate3d(0, 50px, 0);}
    }

  `
const Title = styled.div`
font-weight: 800;
font-size:100px;
margin: 1rem;
font-family:PilseungGothic;
color: #f9b745;
/* text-shadow: #1b1b1b; */
text-shadow: 4px 4px 4px gray;
font-weight: normal;
font-style: normal;
text-align: center;
@media only screen and (max-width: 600px) {
    /* justify-content: flex-start; */
    font-size:40px;
    text-align: center;
  }
`;

const Sub = styled.div`
font-weight: 600;
font-size:50px;
/* margin: 0.2rem; */
color: #0a0406;
/* text-shadow: #1b1b1b; */
text-shadow: 4px 4px 4px gray;
font-weight: normal;
font-style: normal;
`
export default PaperComponents
