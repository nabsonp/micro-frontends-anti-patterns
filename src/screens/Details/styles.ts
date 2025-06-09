import { Flex, Image, Link, SimpleGrid, Tag, Text } from '@chakra-ui/react';
import { Link as LinkDom } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled(Flex).attrs({
  alignSelf: 'flex-start',
  flexDirection: 'column',
})``;

export const HeaderPathContainer = styled(Flex).attrs({
  marginBottom: '8px',
})``;

export const PathHeaderText = styled(Text).attrs({
  fontWeight: 400,
  fontSize: '14px',
})``;

export const AntiPatternNameContainer = styled(Flex).attrs({
  flexDirection: { base: 'column-reverse', md: 'row', lg: 'row' },
  alignItems: { base: 'flex-start', md: 'center', lg: 'center' },
  gap: { base: '0px', md: '12px', lg: '12px' },
})``;

export const AntiPatternTag = styled(Tag).attrs({
  size: 'lg',
  variant: 'solid',
  textColor: 'title-text',
  width: 'fit-content',
  height: 'fit-content',
  borderRadius: '24px',
  marginBottom: { base: '8px', md: '0px', lg: '0px' },
})``;

export const AntiPatternSectionContainer = styled(SimpleGrid).attrs({
  marginTop: '34px',
})``;

export const AntiPatternSectionDescription = styled(Text).attrs({
  fontWeight: 400,
  fontSize: '16px',
  color: 'paragraph-text',
  marginTop: '8px',
})``;

export const AntiPatternSectionLink = styled(Link).attrs({
  fontWeight: 400,
  fontSize: '16px',
  color: 'primary',
  marginTop: '8px',
})``;

export const RelatedAntiPatternLink = styled(LinkDom)`
  font-weight: 400;
  font-size: 16px;
  color: var(
    --chakra-colors-primary,
    #3182ce
  ); // Ajuste para sua cor do tema se necessário
  margin-top: 8px;
  &:hover {
    text-decoration: underline;
  }
`;

export const AntiPatternsSectionImageContainer = styled(Flex).attrs({
  flexDirection: 'column',
  marginLeft: { base: '0px', md: '32px', lg: '32px' },
  marginTop: { base: '24px', md: '0px', lg: '0px' },
  alignItems: 'center',
})``;

export const AntiPatternsSectionImage = styled(Image).attrs({
  width: '90%',
  borderRadius: '12px',
})``;

export const AntiPatternSectionImageTitle = styled(Text).attrs({
  fontWeight: 700,
  fontSize: '20px',
  color: 'title-text',
})``;
