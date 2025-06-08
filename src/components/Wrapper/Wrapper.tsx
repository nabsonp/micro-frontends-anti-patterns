import React, { createContext } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { FooterText, ListContainer, WitheCard } from './styles';
import { WrapperContextProps } from './types';
import useWrapper from './useWrapper';

export const WrapperContext = createContext<WrapperContextProps>(
  {} as WrapperContextProps
);
export function Wrapper() {
  const providerValues = useWrapper();
  return (
    <Box minHeight={'100vh'}>
      <WrapperContext.Provider value={providerValues}>
        <Header />
        <ListContainer>
          <WitheCard>
            <Outlet />
          </WitheCard>
        </ListContainer>
      </WrapperContext.Provider>
      <Flex justifyContent="center" alignSelf="end">
        <FooterText>Micro Frontends Anti-patterns Catalog</FooterText>
      </Flex>
    </Box>
  );
}
