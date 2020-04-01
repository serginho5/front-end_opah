import React from 'react';
import ThemeSwitcher from '../../componets/ThemeSwitcher';
import Desk from '../../assets/desktop-responsive-design.png';
import Tablet from '../../assets/tablets-responsive-design.png';
import Mobile from '../../assets/mobile-responsive-design.png';
import { Container, CardMain, CardHeader, CardText } from './styles';

const Card = (props) => (
  <Container>
    <CardMain>
      <CardHeader style={{ backgroundColor: '#FE9481' }}>
        <img src={Desk} alt="" />
        <h2>Site Responsivo DESKTOP</h2>
      </CardHeader>
      <CardText>
        <p>Quando pressionado o botão <span>Leia mais...</span> o restante da informação deverá aparecer em scroll down.</p>
        <button type="button" style={{ backgroundColor: '#FE9481' }}>Leia mais...</button>
      </CardText>
    </CardMain>

    <CardMain>
      <CardHeader style={{ backgroundColor: '#FCDA92' }}>
        <img src={Tablet} alt="" />
        <h2>Site Responsivo TABLET</h2>
      </CardHeader>
      <CardText>
        <p>Quando pressionado o botão <span>Leia mais...</span> informação deverá aparecer completa em um popup na tela.</p>
        <button type="button" style={{ backgroundColor: '#FCDA92' }}>Leia mais...</button>
      </CardText>
    </CardMain>
    <CardMain>
      <CardHeader style={{ backgroundColor: '#9C8CB9' }}>
        <img src={Mobile} alt="" />
        <h2>Site Responsivo MOBILE</h2>
      </CardHeader>
      <CardText>
        <p>Quando pressionado o botão <span>Leia mais...</span> modifique o tema do site para blackfriday a seu gosto.</p>
        <ThemeSwitcher toggleTheme={props.toggleTheme} />
      </CardText>
    </CardMain>
  </Container>
);

export default Card;
