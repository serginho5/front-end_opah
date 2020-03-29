import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Header from './componets/Header';
import { Container, Content } from './styles/components';

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Content>
        <Header />
      </Content>
    </Container>
  </>
);

export default App;
