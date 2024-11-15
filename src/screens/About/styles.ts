import { Divider, Image, Link, ListItem, Text } from '@chakra-ui/react';
import styled from 'styled-components';

export const AckImage = styled(Image).attrs({
  marginBottom: '8px',
  width: '200px',
})``;

export const CategoryItem = styled(ListItem).attrs({
  color: 'paragraph-text',
  fontSize: '16px',
  fontWeight: 400,
  marginLeft: '16px',
})``;

export const ParagraphText = styled(Text).attrs({
  color: 'paragraph-text',
  fontSize: '16px',
  fontWeight: 400,
})``;

export const ResearcherImage = styled(Image).attrs({
  marginBottom: '8px',
  borderRadius: '100%',
  width: '200px',
})``;

export const SectionDivider = styled(Divider).attrs({
  marginY: '24px',
  color: 'border',
  width: '97%',
})``;

export const SectionTitle = styled(Text).attrs({
  fontSize: '28px',
  fontWeight: 700,
  marginBottom: '16px',
})``;

export const TextLink = styled(Link).attrs({
  color: 'blue.500',
  fontWeight: 400,
  fontSize: '16px',
  textDecoration: 'underline',
  target: '_blank',
})``;
