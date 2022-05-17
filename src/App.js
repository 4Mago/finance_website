import Header from './header';
import styled from 'styled-components'
import './App.css';
import IntroPage from './intro_anm/introPage';

function App() {
  return (
    <Body>
      <HeroGlow />
      <Header ID="HRJ" />
      <Container>

        <Left>
          <h1>
            The future of capital growth,
            made easy.
          </h1>
        </Left>
        <Right>

          <Iframe
            width="100%"
            height="100%"
            scrolling="no"
            overflow="hidden"
            frameBorder="0"
            src="https://www.w3spaces-preview.com/firstproject12314/index.html" />

        </Right>
      </Container>
      <IntroPage />
      <NewSlide />
    </Body>
  );
}

export default App;

const Div = styled.div`
`

const Iframe = styled.iframe`
`

const Body = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #050D1F;
`

const Container = styled.div`
  height: 89%;
  width: 100%;
  display: flex;
  justify-content: center;
`

const HeroGlow = styled.img`
  position: absolute;
  top: 50%;  
  left: 50%; 
  transform: translate(-50%, -50%);
  background-image: url('/hero-glow.svg');
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`

const Left = styled.div`
width: 100%;
height: 70%;
display: flex;
justify-content: center;
align-items: center;

h1 {
  font-size: 68px;
  width: 550px;
}
`

const Right = styled.div`
width: 100%;
`

const NewSlide = styled.div`

  height: 50vh;
  width: 100%;
  background-color: red;
`