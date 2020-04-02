import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Logo from '../../assets/logo.png';
import Buscar from '../../assets/search.png';
import { Mobile, MobileHamburg, MobileLogo, MobileBusca } from './styles';



const HeaderMobile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Mobile>
        <MobileHamburg>
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href=""><li>HOME</li></a>
              <a href=""><li>HTML5</li></a>
              <a href=""><li>CSS3</li></a>
              <a href=""><li>JAVASCRIPT</li></a>
              <a href=""><li>REACT</li></a>
              <a href=""><li>REDUX</li></a>
            </ul>
          </div>
        </MobileHamburg>
        <MobileLogo>
          <a href="#"><img src={Logo} alt="logo" /></a>
        </MobileLogo>
        <MobileBusca>
          <button onClick={handleShow}><img src={Buscar} alt="buscar" /></button>
        </MobileBusca>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <input placeholder="Digite aqui sua busca..." style={{ border: 0 }} />
            </Modal.Title>
          </Modal.Header>
        </Modal>

      </Mobile>
    </>
  )
};

export default HeaderMobile;
