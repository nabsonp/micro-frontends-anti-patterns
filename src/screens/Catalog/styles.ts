import { Button, Spinner, Text } from '@chakra-ui/react';
import styled from 'styled-components';

export const FilterButton = styled(Button).attrs({
  background: 'transparent',
  _active: {
    bg: 'primary-active',
    transform: 'scale(0.98)',
  },
  border: '1px',
  borderRadius: '24px',
  _hover: { bg: 'primary-active' },
  textAlign: 'left',
  justifyContent: 'left',
})``;

export const SpinnerSearch = styled(Spinner).attrs({
  color: 'primary',
  size: 'lg',
  thickness: '4px',
  alignSelf: 'center',
  justifySelf: 'center',
  marginBottom: '24px',
})``;

export const CatalogTItleText = styled(Text).attrs({
  fontWeight: 700,
  fontSize: '32px',
})``;

export const SearchTitle = styled(Text).attrs({
  fontWeight: 700,
  fontSize: '32px',
})``;

export const SearchDescription = styled(Text).attrs({
  fontWeight: 400,
  fontSize: '16px',
  padding: '12px 0px 24px 0px',
  color: 'paragraph-text',
})``;
