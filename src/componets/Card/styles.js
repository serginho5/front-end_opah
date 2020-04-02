import styled from 'styled-components';
import { grey, gren } from '../../styles/color';

export const Container = styled.div`
    display: flex;

@media screen and (max-width: 880px){
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  flex-flow: column-reverse;
}
`;

export const CardMain = styled.div`
    background: #fff;
    width: 31%;
    height: 100%;
    margin: 30px 10px;

@media screen and (max-width: 880px){
  width: 100%;
  margin: 30px;
}
`;

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 30px;

h2 {
    color: #fff;
    font-size: 2.0em;
    font-weight: 300;
    letter-spacing: -0.0625em;
    margin-top: 20px;

@media screen and (max-width: 1190px){
  font-size: 1.8em;
}
}
`;

export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

p {
    font-size: 1.2em;
    font-weight: 300;
    letter-spacing: -0.05555555556em;
    padding: 10px;
    line-height: 1.2em;
    color: ${grey};
}

span {
  font-weight: 800;
}

button {
    margin-right: 20px;
    padding: 8px 11px;
    border: 0;
    color: #fff;
    font-size: 1.1em;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 600ms ease;
    margin-bottom: 30px;
    outline: 0;


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

}

`;
