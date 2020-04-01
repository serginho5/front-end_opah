import React from 'react';
import { Button } from './styles';

const ThemeSwitcher = (props) => {
  return (
    <Button onClick={() => props.toggleTheme()}>Leia mais...</Button>
  );
}
export default ThemeSwitcher;
