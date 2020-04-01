import styled from 'styled-components';
import { gren, purple } from '../../styles/color';

export const Button = styled.button`
    margin-right: 20px;
    padding: 8px 11px;
    background: ${purple};
    border: 0;
    color: #fff;
    font-size: 1.1em;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 600ms ease;
    margin-bottom: 30px;


&:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 38px;
  background: rgba(255,255,255,0.3);
  transition:all 2s ease;
}

&:hover {
  background: ${gren}!important;
  color: #fff!important;
}
`;
