import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Cont>
            <LogoCont>
                <p>this is the logo</p>
                <Logo />
            </LogoCont>
            <Nav>
                <Product>
                    <p>this is product</p>
                </Product>
                <Enterprise />
                <Documentation />
                <Explore />
            </Nav>
        </Cont>
    )
}

export default Header


const Cont = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
const LogoCont = styled.div`
    background-color: #24292f;
    width: 50%;
`

const Nav = styled.div`
    background-color: #0a1d34;
    width: 20%;
`

const Logo = styled.div`
    max-width: 68px;
`

const Product = styled.div`
`
const Enterprise = styled.div`
`
const Documentation = styled.div`
`
const Explore = styled.div`
`