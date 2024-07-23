import { Card, Flex, Grid, Tag, Text } from '@chakra-ui/react';
import styled from 'styled-components';

export const GridContainer = styled(Grid).attrs({
  gap: '16px',
  templateColumns: {
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  },
})``;

export const ItemContainer = styled(Card).attrs({
  borderColor: 'border',
  borderWidth: '1px',
  borderRadius: '16px',
  _hover: { bg: 'primary-hover' },
  _active: {
    bg: 'primary-active',
    transform: 'scale(0.98)',
  },
  cursor: 'pointer',
})``;

export const AntiPatternItemTag = styled(Tag).attrs({
  size: 'sm',
  variant: 'solid',
  textColor: 'title-text',
  alignSelf: 'center',
})``;

export const TextContainer = styled(Flex).attrs({
  flexDirection: 'row',
  display: 'flex',
  flexWrap: 'wrap-reverse',
  alignItems: 'baseline',
  margin: '24px 0px 12px 20px',
})``;

export const AntiPatternItemDescriptionText = styled(Text).attrs({
  fontWeight: 400,
  fontSize: '16px',
  margin: '0px 20px 24px 20px',
  lineHeight: '24px',
  textColor: 'paragraph-text',
  maxWidth: '70%',
  noOfLines: 4,
})``;

export const AntiPatternItemTitle = styled(Text).attrs({
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '28px',
  textColor: 'title-text',
  marginRight: '12px',
})``;
