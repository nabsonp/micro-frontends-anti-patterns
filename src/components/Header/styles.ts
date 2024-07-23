import { Box, Flex, IconButton, Divider } from '@chakra-ui/react';
import styled from 'styled-components';

export const HeaderContainer = styled(Flex).attrs({
  backgroundColor: 'white',
  justifyContent: 'space-between',
  padding: '16px',
  alignItems: 'center',
  borderColor: 'border',
  borderBottomWidth: { base: '1px', lg: '0px' },
})``;

export const SearchBarContainer = styled(Box).attrs({
  width: { base: '50%' },
  maxW: '800px',
  marginRight: { base: '0px', md: '48px', lg: '48px' },
})``;

export const LogoContainer = styled(Box).attrs({})``;

export const DrawerButton = styled(IconButton).attrs({
  size: 'lg',
  variant: 'ghost',
  colorScheme: 'primary',
  color: 'primary',
  display: { base: 'flex' },
})``;

export const StyledDivider = styled(Divider).attrs({
  color: 'border',
  marginTop: '16px',
  marginBottom: '16px',
})``;
