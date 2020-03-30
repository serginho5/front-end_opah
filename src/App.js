import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Header from './componets/Header';
import Footer from './componets/Footer';
import { Container, Content } from './styles/components';

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Content>
        <Header />
        <Footer />
      </Content>
    </Container>
  </>
);

export default App;
