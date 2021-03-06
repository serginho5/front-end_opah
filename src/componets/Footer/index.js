import React from 'react';
import Logo from '../../assets/logo_small.png';
import Raia from '../../assets/logo_drogaraia.png';
import Droga from '../../assets/logo_drogasil.png';
import Farma from '../../assets/logo_farmasil.png';
import Uni from '../../assets/logo_univers.png';
import Bio from '../../assets/logo_4bio.png';
import FooterMobile from '../Footer-mobile';
import { Container, FooterText, FooterImg, FooterLogo } from './styles';

const Footer = () => (
  <>
    <Container>
      <FooterText>
        <p>RD 2020. Todos os direitos reservados</p>
      </FooterText>
      <FooterImg>
        <a href="#"><img src={Raia} alt="logo-raia" /></a>
        <a href="#"><img src={Droga} alt="logo-drogasil" /></a>
        <a href="#"><img src={Farma} alt="logo-farmasil" /></a>
        <a href="#"><img src={Uni} alt="logo-univers" /></a>
        <a href="#"><img src={Bio} alt="logo-4xbio" /></a>
      </FooterImg>
      <FooterLogo>
        <a href="#"><img src={Logo} alt="logo" /></a>
      </FooterLogo>
    </Container>
    <FooterMobile />
  </>
);

export default Footer;
