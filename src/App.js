import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Header from './componets/Header';
import { Container } from './styles/components';

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header />
    </Container>
  </>
);

export default App;
