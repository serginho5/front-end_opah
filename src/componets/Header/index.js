import React from 'react';
import Logo from '../../assets/logo.png';
import { Container, HeaderLogo, HeaderNav } from './styles';

const Header = () => (
  <Container>
    <HeaderLogo>
      <a href="/"><img src={Logo} alt="Logotipo" /></a>
    </HeaderLogo>
    <HeaderNav>
      <ul>
        <li><a href="/">HTML5</a></li>
        <li><a href="/">CSS3</a></li>
        <li><a href="/">JAVASCRIPT</a></li>
        <li><a href="/">REACT</a></li>
        <li><a href="/">REDUX</a></li>
      </ul>
    </HeaderNav>
  </Container>
)

export default Header;
