import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Main from './componets/Main';
import { Container, Content } from './styles/components';

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Content>
        <Header />
        <Main />
        <Footer />
      </Content>
    </Container>
  </>
);

export default App;
