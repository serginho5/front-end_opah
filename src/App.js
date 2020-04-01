import React, { useState } from 'react';
import GlobalStyle from './styles/globalStyles';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Main from './componets/Main';
import { Container, Content } from './styles/components';


const App = () => {
  const [theme, setTheme] = useState(true);

  const toogleTheme = () => {
    console.log(toogleTheme);
    setTheme(theme ? false : true);
  };

  return (
    <>
      <GlobalStyle typeTheme={theme} />
      <Container>
        <Content>
          <Header />
          <Main outrotribut toogleTheme={toogleTheme} />
          <Footer />
        </Content>
      </Container>
    </>
  )
};

export default App;
