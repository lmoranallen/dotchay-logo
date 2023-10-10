import React from 'react';
import styled from 'styled-components';


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
`

const VerticalBox = styled.div`
  width: 240px;
  height: 120px;
  overflow-y: scroll;

  // chrome, safari and opera
  ::webkit-scrollbar {
    display: none
  }

  // IE, Edge and Firefox
  -ms-overflow-style: none;
  scrollbar-width: none;

`

const VerticalScrollText = styled(LeadingTitle)`
  width: auto;
  
`

const App = () => {
  return (
    <Container>
       <TextBox><VerticalBox><VerticalScrollText>dev chef gym lee</VerticalScrollText></VerticalBox><LeadingTitle> .chay </LeadingTitle></TextBox>
    </Container>
   
  );
}

export default App;
