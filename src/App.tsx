import 'moment/locale/pt';
import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SCREENS } from './utils/screens';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme';
import About from './screens/About';
import Catalog from './screens/Catalog';
import Details from './screens/Details';
import { Wrapper } from './components/Wrapper/Wrapper';
import Background from './screens/Background';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route element={<Wrapper />}>
            <Route path="*" element={<Navigate to={SCREENS.CATALOG} />} />
            <Route index element={<Navigate to={SCREENS.CATALOG} replace />} />
            <Route path={SCREENS.ABOUT} element={<About />} />
            <Route path={SCREENS.CATALOG} element={<Catalog />} />
            <Route path={SCREENS.DETAILS} element={<Details />} />
            <Route path={SCREENS.BACKGROUND} element={<Background />} />
          </Route>
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
};

export default App;
