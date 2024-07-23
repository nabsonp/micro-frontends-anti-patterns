import React from 'react';
import { Highlight } from '@chakra-ui/react';
import { TAntiPatternsItem } from './types';
import { FilterProperties } from '../../utils/constants';
import {
  AntiPatternItemTitle,
  AntiPatternItemDescriptionText,
  GridContainer,
  ItemContainer,
  TextContainer,
  AntiPatternItemTag,
} from './styles';

function RenderAntiPatterns({
  antiPatterns,
  handleClickItem,
  search,
}: {
  antiPatterns: TAntiPatternsItem[];
  handleClickItem: (data: TAntiPatternsItem) => void;
  search: string;
}) {
  return (
    <>
      {antiPatterns.map((item, index) => (
        <ItemContainer
          key={`${item.name}_${index}`}
          onClick={() => handleClickItem(item)}
        >
          <TextContainer>
            <AntiPatternItemTitle>{item.name}</AntiPatternItemTitle>
            <AntiPatternItemTag
              background={FilterProperties[item.category]?.color}
            >
              {item.category}
            </AntiPatternItemTag>
          </TextContainer>
          <AntiPatternItemDescriptionText>
            <Highlight query={search}>
              {search ? item.highlight || item.problem.text : item.problem.text}
            </Highlight>
          </AntiPatternItemDescriptionText>
        </ItemContainer>
      ))}
    </>
  );
}

export function AntiPatternsList({
  antiPatterns,
  handleClickItem,
  search,
}: {
  antiPatterns: TAntiPatternsItem[];
  handleClickItem: (data: TAntiPatternsItem) => void;
  search: string;
}) {
  return (
    <GridContainer>
      <RenderAntiPatterns
        antiPatterns={antiPatterns}
        handleClickItem={handleClickItem}
        search={search}
      />
    </GridContainer>
  );
}
