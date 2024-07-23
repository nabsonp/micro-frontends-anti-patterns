import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import SearchNotFoundIcon from '../../assets/search-not-found.svg';
import { DescriptionSearchNotFound, TitleSearchNotFound } from './styles';

export function SearchNotFound({ search }: { search: string }) {
  return (
    <Flex alignItems="center" flexDirection="column">
      <Image src={SearchNotFoundIcon} width="80px" />
      <TitleSearchNotFound>No results Found</TitleSearchNotFound>
      <DescriptionSearchNotFound>
        We couldn’t find “{search}”. Try again with different words.
      </DescriptionSearchNotFound>
    </Flex>
  );
}
