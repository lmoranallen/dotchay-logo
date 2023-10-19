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

const loadPageAnimation = keyframes`
  0% { opacity: 1; }
  100% { background-color: white; z-index: -1; }
`;

const resetDot = keyframes`
  0% { background-color: white; }
  100% { background-color: black; transform: scale(1);}
`

const VerticalScrollText = styled(LeadingTitle)`
  animation-name: ${scrollAnimation};
  animation-duration: 5s;
  animation-fill-mode: forwards;
`;

const FullDot = styled.div`
  z-index: 100;
  width: 1%;
  height: 1%;
  border-radius: 50%;
  background-color: black;
  top: 51%;
  left: 50%;
  position: fixed;
  animation-name: ${expandDotAnimation} , ${loadPageAnimation};
  animation-delay: 6s;
  animation-duration: 5s;
  animation-fill-mode: forwards;
`;

const ConfettiBlock = styled.div`
  position: absolute;
  display: flex;
  left: 33%;
  top: 33%;
`;

const ConfettiBlockLower = styled(ConfettiBlock)`
  rotate: 180deg;
  position: absolute;
  display: flex;
  top: 55%;
`;

const Confetti = styled.div`
  width: 35px;
  height: 120px;
  background-color: black;
  &:nth-child(3n + 1) {
    rotate: -50deg;
    background-color: green;
    margin-right: 120px;
  }
  &:nth-child(3n + 2) {
    background-color: blue;
  }
  &:nth-child(3n) {
    rotate: 50deg;
    background-color: red;
    margin-left: 120px;
  }
`;

const VerticalScrollElement = styled.div`
`

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
        <FullDot/><LeadingTitle> chay </LeadingTitle>
       </TextBox>
    </Container>
   
  );
}

export default App;
