import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Cont>
            <LogoCont>
                <Logo src="/images/logo-letters.svg" />
            </LogoCont>
            <Nav>
                <Product />
                <Enterprise />
                <Documentation />
                <Explore />
            </Nav>
        </Cont>
    )
}

export default Header


const Cont = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`
const LogoCont = styled.div`

`

const Logo = styled.img`
    width: 100%;
    background-repeat: no-repeat;
    height:50px;
    padding: 4px;
    margin: 5px;
`
const Nav = styled.div`
    background-color: #0a1d34;
    width: 20%;
`

const Product = styled.div`
`
const Enterprise = styled.div`
`
const Documentation = styled.div`
`
const Explore = styled.div`
`