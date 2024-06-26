import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';

function App() {
  window.matchMedia = null;
  const darkMode = useDarkMode(true);

  return (
    <AppContext.Provider value={{ darkMode }}>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="App">
          <HashRouter>
            <MainApp />
          </HashRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
