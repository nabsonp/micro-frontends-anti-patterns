import { Card, Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';

export const FooterText = styled(Text).attrs({
  fontWeight: 400,
  fontSize: '16px',
  margin: '0px 24px 24px 24px',
  color: 'paragraph-text',
})``;

export const ListContainer = styled(Flex).attrs({
  justifyContent: 'center',
  marginTop: {
    base: '0px',
    md: '40px',
    lg: '40px',
  },
  width: '100%',
  marginBottom: '40px',
})``;

export const WitheCard = styled(Card).attrs({
  borderRadius: {
    base: '0px',
    md: '24px',
    lg: '24px',
  },
  width: {
    base: '100%',
    md: '90%',
    lg: '80%',
  },
  background: 'white',
  padding: '32px 24px',
})``;
