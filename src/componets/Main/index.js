import React from 'react';
import {
  Container, ContentTitle, ContentText,
  ContentCenter, SpanGren,
  SpanGrey, SpanRed, SpanYellow, SpanPurple
} from './styles';
import Card from '../../componets/Card';

const Main = (props) => {
  return (
    <Container>
      <ContentTitle>
        <h1>Crie este site <span>responsivo</span> com <span>REACT</span> utilizando <span>styled-components</span></h1>
      </ContentTitle>
      <ContentText>
        <ContentCenter>
          <h3>A fonte utilizada é a Open Sans de 300 a 800.</h3>
          <h3>exemplo: "Open Sans", Helvetica, sans-serif, arial;</h3>
          <h3>Já as cores são:</h3>
          <h3>
            <SpanGren></SpanGren>#007f56,
          <SpanGrey></SpanGrey>#868686,
          <SpanRed></SpanRed>#FE9481,
          <SpanYellow></SpanYellow>#FCDA92 e
          <SpanPurple></SpanPurple>#9C8CB9
          </h3>
        </ContentCenter>
      </ContentText >
      <Card toggleTheme={props.toogleTheme} />
    </Container >
  );
}
export default Main;
