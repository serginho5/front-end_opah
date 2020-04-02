import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';
import ThemeSwitcher from '../../componets/ThemeSwitcher';
import Desk from '../../assets/desktop-responsive-design.png';
import Tablet from '../../assets/tablets-responsive-design.png';
import Mobile from '../../assets/mobile-responsive-design.png';
import { Container, CardMain, CardHeader, CardText } from './styles';

const Card = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <CardMain>
        <CardHeader style={{ backgroundColor: '#FE9481' }}>
          <img src={Desk} alt="" />
          <h2>Site Responsivo DESKTOP</h2>
        </CardHeader>
        <CardText>
          <p>Quando pressionado o botão <span>Leia mais...</span> o restante da informação deverá aparecer em scroll down.</p>
          <button
            type="button"
            onClick={() => scroll.scrollToTop()}
            style={{ backgroundColor: '#FE9481' }}
          >Leia mais...</button>
        </CardText>
      </CardMain>

      <CardMain>
        <CardHeader style={{ backgroundColor: '#FCDA92' }}>
          <img src={Tablet} alt="" />
          <h2>Site Responsivo TABLET</h2>
        </CardHeader>
        <CardText>
          <p>Quando pressionado o botão <span>Leia mais...</span> informação deverá aparecer completa em um popup na tela.</p>
          <button onClick={handleShow} style={{ backgroundColor: '#FCDA92' }}>
            Leia mais...
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Site Responsivo TABLET</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fcda92',
            }}>
              <img src={Tablet} alt="tablet" style={{ paddingTop: 40, paddingBottom: 40 }} />
            </Modal.Body>
          </Modal>

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
  )
};

export default Card;
