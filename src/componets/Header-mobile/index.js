import React from 'react';
import Logo from '../../assets/logo.png';
import Buscar from '../../assets/search.png';
import { Mobile, MobileHamburg, MobileLogo, MobileBusca } from './styles';



const HeaderMobile = () => (
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
        <button type="button" data-toggle="modal" data-target="#buscar"><img src={Buscar} alt="buscar" /></button>
      </MobileBusca>


    </Mobile>
  </>
);

export default HeaderMobile;
