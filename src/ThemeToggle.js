import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContext } from './theme-context';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button variant="outline-dark" onClick={toggleTheme}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </Button>
  );
};

export default ThemeToggle;
