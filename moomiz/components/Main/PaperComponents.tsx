import React, { use, useState } from 'react'
import { styled } from "styled-components"
import Image from "next/image"
import heart from "@/public/heart.png"
import ballon from "@/public/ballon.png"
import gift from "@/public/gift.png"
import DDANG from "@/public/DDANG.jpg"
import Jungsu from "@/public/jungsu.jpg"
import Kumoh from "@/public/photo.jpg"
import Modal from './Modal'
import confetti from 'canvas-confetti'


function PaperComponents() {
    const birthdayMsg ='정수야! 오빠!? 생일 축하해🎉💗 물리적인 거리가 너무 멀어서 생일 축하해주고 싶은데 어떻게 해줄까? 고민하다가 나름의 직무(?)를 살려서 편지를 만들어 봤어!! 이런 편지는 처음 받지? ㅎㅎ 시간이 천천히 가는거 같다가도 벌써 11월이 됐다고 생각하니까 너무 빨리 지난거 같아. 요즘은 어때 잘 지내고 있지? 사실 우리 둘 다 직장인이라 반복되는 삶을 살아가고 있어서 재밌는 이야기 하는 것도 어렵고 둘 다 힘든 이야기는 잘 안하려고 해서 대화가 깊진 않지만! 일기로 보는 일상이나 근황 보면 그래도 정수의, 오빠의 존재가 있어서 외롭진 않고 즐겁다? 사실 오빠의 근본적인 고민을 내가 해결해줄 수 없는게 아쉽긴 하지만, 성장해가는 과정에 지켜볼 수 있고 함께 할 수 있는 사람이 있어서 든든한거 같아. 퀴즈 만들면서 갤러리 다시 보고, 이력서도 참고해서 만들었어!  일상에 색 다른 이벤트로 느껴줬으면 좋겠다. 거리는 멀리 있지만 내가 생일 너무너무 축하하구 나중에 만났을 때 한번 더 축하하자 근무 화이팅 하구 생일 잘 보내💗🎂'
    const ddangMsg = '정수 오빠 생일 축하해 멍🐶'
    const introMsg = '내가 좋아하는 따봉 정수 사진이야😘'
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


    {/* const msgHandler = (img: string) => {
        setIsModalOpen(true)
        switch (img) {
            case 'heart':
                setMsg(introMsg)
                setName('오늘의 주인공')
                break
            case 'ballon':
                setMsg(ddangMsg)
                setName('땡이🐾')
                break
            case 'gift':
                setMsg(birthdayMsg)
                setName('민지')
                break

        }
    } */}

    return (<Wrapper>
        </Modal>
        <Image
            className='heart'
            src={heart}
            alt='하트'
            width={240}
            height={234}
            onClick={() => msgHandler('heart')}
        />
        {/* <Image
            className='star'
            src={star}
            alt='별'
            width={240}
            height={234}
            onClick={() => msgHandler('star')}
        /> */}
        <Image
            className='ballon'
            src={ballon}
            alt='ballon'
            width={340}
            height={450}
            onClick={() => msgHandler('ballon')}
        />
        <Title>Happy birthday<br/> to <br/>🎂YeongWoo🎂</Title>
        {/* <Image
            className='cloud'
            src={cloud}
            alt='구름'
            width={240}
            height={234}
            onClick={() => msgHandler('cloud')}
        /> */}
        <Image
            className='gift'
            src={gift}
            alt='gift'
            width={240}
            height={234}
            onClick={() => msgHandler('gift')}
        />
        {/* <Image
            className='clover'
            src={clover}
            alt='클로버'
            width={240}
            height={234}
            onClick={() => msgHandler('clover')}
        /> */}
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
