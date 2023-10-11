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
  0% { font-size: 100px; }
  100% { font-size:10000px; }
`

const VerticalScrollText = styled(LeadingTitle)`
  // animation-name: ${scrollAnimation};
  // animation-duration: 5s;
  // animation-fill-mode: forwards;
`;

const LeadingDot = styled.span`
  z-index: 100;
  animation-name: ${expandDotAnimation};
  animation-duration: 5s;
  animation-fill-mode: forwards;
`

const VerticalScrollElement = styled.div`
`

const App = () => {
  return (
    <Container>
       <TextBox>
        <VerticalBox>
          <VerticalScrollElement >
            {characterList.map( elem => <VerticalScrollText>{elem}</VerticalScrollText>)} 
          </VerticalScrollElement>
        </VerticalBox>
        <LeadingTitle> <LeadingDot>.</LeadingDot>chay </LeadingTitle>
       </TextBox>
    </Container>
   
  );
}

export default App;
