import styled from 'styled-components';
import { gren, grey, red, yellow, purple } from '../../styles/color';

export const Container = styled.div`

`;

export const ContentTitle = styled.div`
    display: flex;
    justify-content: center;

h1 {
    font-size: 3.5em;
    font-weight: 300;
    color: ${gren};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 1.03em;
    margin: 60px 40px;
    margin-bottom: 55px;
}

span {
  font-weight: 800;
  margin: 0 14px;
}


@media screen and (max-width: 767px){
  h1{
    font-size: 2.3em;
    margin: 60px 30px;
  }
}
`;

export const ContentText = styled.div`
  display: flex;
  justify-content: center;

h3 {
    font-size: 2.0em;
    font-weight: 300;
    letter-spacing: -0.0625em;
    line-height: 1.1875em;
    color: ${grey};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-shadow: 1px 1px 2px #dee0d3;
}

@media screen and (max-width: 767px){
  h3 {
    font-size: 1.3em;
    margin: 0 30px;
  }
}
`;

export const ContentCenter = styled.div`
   width: 100%;
`;

export const SpanGren = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${gren};
    margin-top: 12px;
    margin-right: 5px;

@media screen and (max-width: 767px){
  margin-top: 5px;
}
`;

export const SpanGrey = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${grey};
    margin-top: 12px;
    margin-right: 5px;
    margin-left: 5px;

@media screen and (max-width: 767px){
  margin-top: 6px;
}
`;

export const SpanRed = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${red};
    margin-top: 12px;
    margin-right: 5px;
    margin-left: 5px;

@media screen and (max-width: 767px){
  margin-top: 5px;
}
`;

export const SpanYellow = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${yellow};
    margin-top: 12px;
    margin-right: 5px;
    margin-left: 5px;

@media screen and (max-width: 767px){
  margin-top: 5px;
}
`;

export const SpanPurple = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${purple};
    margin-top: 12px;
    margin-right: 5px;
    margin-left: 5px;

@media screen and (max-width: 767px){
  margin-top: 5px;
}
`;
