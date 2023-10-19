import React from 'react';
import styled, { keyframes } from 'styled-components';


const characterList = ['dev', 'chef', 'gym', 'weeb', 'lee'];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: auto;
`;

const TextBox = styled.div`
  display: flex;
`

const LeadingTitle = styled.h1`
  font-size: 100px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 24px;
  margin-right: 24px;
`

const VerticalBox = styled.div`
  width: auto;
  height: 160px;
  overflow-y: hidden;

  // chrome, safari and opera
  ::webkit-scrollbar {
    display: none
  }

  // IE, Edge and Firefox
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const scrollAnimation = keyframes`
  0% { -moz-transform: translateY(0); }
  100% {-moz-transform: translateY(${characterList.length*-152}px); }
`;


const expandDotAnimation = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1000); }
`;

const emitConfettiAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translate(-45%, -45%) }
`;

const pushLeftHandTextAnimation = keyframes`
  0% { }
  100% {transform: translate(120px, 0px) }
`;

const loadPageAnimation = keyframes`
  0% { opacity: 1; }
  100% { z-index: -1; }
`;

const VerticalScrollText = styled(LeadingTitle)`
  animation-name: ${scrollAnimation};
  animation-duration: 5s;
  animation-fill-mode: forwards;
`;

const FullDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  top: 51%;
  left: 50%;
  position: fixed;
`;

const AnimationDot = styled.div`
  z-index: -100;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #009E60;
  top: 51%;
  left: 50%;
  position: fixed;
  animation-name: ${expandDotAnimation} , ${loadPageAnimation};
  animation-delay: 7s;
  animation-duration: 4s;
  animation-fill-mode: forwards;
`;

const ConfettiBlock = styled.div`
  position: absolute;
  display: flex;
  left: 32%;
  top: 35%;
  margin-bottom: 120px;
`;

const Confetti = styled.div`
  width: 25px;
  height: 100px;
  opacity: 0;
  background-color: #009E60;
  &:nth-child(3n + 1) {
    rotate: -30deg;
    
    margin-right: 120px;
  }
  &:nth-child(3n + 2) {
    // background-color: blue;
  }
  &:nth-child(3n) {
    rotate: 30deg;
    // background-color: red;
    margin-left: 120px;
  }
  animation-name: ${emitConfettiAnimation};
  animation-delay: 6s;
  animation-duration: 0.75s;
  animation-fill-mode: forwards; 
`;

const ConfettiBlockLower = styled(ConfettiBlock)`
  rotate: 180deg;
  position: absolute;
  display: flex;
  top: 53%; 
`;

const VerticalScrollElement = styled.div`
  animation-name: ${pushLeftHandTextAnimation};
  animation-delay: 10s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;

const App = () => {
  return (
    <Container>
      <ConfettiBlock>
        <Confetti/>
        <Confetti/>
        <Confetti/>
      </ConfettiBlock>
      <ConfettiBlockLower>
        <Confetti/>
        <Confetti/>
        <Confetti/>
      </ConfettiBlockLower>
       <TextBox>
        <VerticalBox>
          <VerticalScrollElement >
            {characterList.map( elem => <VerticalScrollText>{elem}</VerticalScrollText>)} 
          </VerticalScrollElement>
        </VerticalBox>
        <AnimationDot/><FullDot/><LeadingTitle> chay </LeadingTitle>
       </TextBox>
    </Container>
   
  );
}

export default App;
