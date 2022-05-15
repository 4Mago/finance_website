import Header from './header';
import styled from 'styled-components'
import './App.css';

function App() {
  return (
    <Body>
      <HeroGlow />
      <Container>
        <Header />
        <Left>

        </Left>
        <Right>
          <Globe src="/globe.webp" />
        </Right>
      </Container>
    </Body>
  );
}

export default App;


const Body = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #040D21;
  
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
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

const Globe = styled.img`
  height: 500px;
  width: 500px;

`

const Left = styled.div`
width: 50%;
`

const Right = styled.div`
width: 50%;
`