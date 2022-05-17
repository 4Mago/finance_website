import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

function IntroPage() {


    const introAnimation1 = useRef(null)
    const introAnimation2 = useRef(null)
    const introAnimation3 = useRef(null)
    const introAnimation4 = useRef(null)
    const introLogo = useRef(null)
    const introPage = useRef(null)
    const introSlider = useRef(null)
    const [Enter, setPlay] = React.useState(false)

    useEffect(() => {
        gsap.to(introAnimation1.current, {
            duration: 1,
            y: '0%',
            delay: 1
        })
    }, [introAnimation1])

    useEffect(() => {
        gsap.to(introAnimation2.current, {
            duration: 1,
            y: '0%',
            delay: 1
        })
    }, [introAnimation2])

    useEffect(() => {
        gsap.to(introAnimation3.current, {
            duration: 1,
            y: '0%',
            delay: 2
        })
    }, [introAnimation3])

    useEffect(() => {
        gsap.from(introAnimation4.current, {
            duration: 4,
            autoAlpha: 0,
            ease: 'none',
            delay: 3,
        })
    }, [introAnimation4])


    useEffect(() => {
        setPlay(!Enter)
        if (Enter) {
            gsap.to(introPage.current, {
                x: '-100%',
                ease: 'power1.out',
                duration: 1,
                delay: 2
            })
            gsap.to(introSlider.current, {
                x: '100%',
                ease: 'power1.out',
                duration: 1,
                delay: 2
            })
            gsap.to(introLogo.current, {
                duration: 1,
                opacity: 0,
                delay: 2.15,
            })
        }
    }, [Enter])

    return (
        <>
            <Container ref={introPage} src='/images/leftLogo.svg'></Container>
            <IntroLogo ref={introLogo} src='/images/goldMiddle.svg' />
            <Slider ref={introSlider} src='/images/rightLogo.svg'></Slider>
        </>
    )
}

export default IntroPage


const Container = styled.img`
    background: black;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`
const Slider = styled.img`
    background: black;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    z-index: 3;
`

const IntroLogo = styled.img`
    position: absolute;
    height: 350px;
    offset: 20px 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999999999;

`

const IntroText = styled.div`
    display: flex;
    flex-flow: column;
    font-size: 3rem;
    color: blanchedalmond;
`



const HideText = styled.h1`
background: black;
overflow: hidden;

 span {
    transform: translateY(100 %);
    display: inline-block;
}
`

const Span = styled.span`
max-width: 40%;
object-fit: contain;
`