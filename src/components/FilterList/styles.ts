import { Button, List } from '@chakra-ui/react';
import styled from 'styled-components';

export const FilterButton = styled(Button).attrs({
  background: 'transparent',
  _active: {
    bg: 'primary-active',
    transform: 'scale(0.98)',
  },
  border: '1px',
  borderRadius: '40px',
  _hover: { bg: 'primary-hover' },
  textAlign: 'left',
  justifyContent: 'left',
  justifyItems: 'center',
  size: 'sm',
})``;

export const FilterListContainer = styled(List).attrs({
  margin: '24px 0px',
  display: 'flex',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  listStyleType: 'none',
  flexWrap: 'nowrap',
})``;
