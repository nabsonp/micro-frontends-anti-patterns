import { Flex, Image, SimpleGrid, Tag, Text } from '@chakra-ui/react';
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
  fontSize: '14px',
  color: 'paragraph-text',
  marginTop: '16px',
})``;

export const AntiPatternSectionImageDescription = styled(Text).attrs({
  fontWeight: 400,
  fontSize: '12px',
  color: 'paragraph-text',
  marginTop: '8px',
})``;

export const AntiPatternsSectionImageContainer = styled(Flex).attrs({
  flexDirection: 'column',
  marginLeft: { base: '0px', md: '32px', lg: '32px' },
  marginTop: { base: '24px', md: '0px', lg: '0px' },
  alignItems: 'center',
})``;

export const AntiPatternsSectionImage = styled(Image).attrs({
  height: '207px',
  width: '480px',
  borderRadius: '12px',
})``;

export const AntiPatternSectionImageTitle = styled(Text).attrs({
  fontWeight: 700,
  fontSize: '20px',
  color: 'title-text',
})``;
