import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FilterButton, FilterListContainer } from './styles';
import { TFilterItems } from './types';

function RenderFilters({
  filters,
  selectedItem,
}: {
  filters: TFilterItems[];
  selectedItem: string;
}) {
  return (
    <Box display="inline-block">
      {filters.map((item, index) => (
        <FilterButton
          marginLeft={index === 0 ? '0px' : '12px'}
          key={item.key}
          color={item.key === selectedItem ? 'primary-border' : 'border'}
          isActive={item.key === selectedItem}
          onClick={item.handleClick}
        >
          <Text
            fontWeight={item.key === selectedItem ? 600 : 400}
            fontSize="16px"
            lineHeight="24px"
            textColor={item.key === selectedItem ? 'primary' : 'title-text'}
            padding="16px"
          >
            {item.text} ({item.count})
          </Text>
        </FilterButton>
      ))}
    </Box>
  );
}

export function FilterList({
  filters,
  selectedItem,
}: {
  filters: TFilterItems[];
  selectedItem: string;
}) {
  return (
    <Box>
      <FilterListContainer>
        <RenderFilters filters={filters} selectedItem={selectedItem} />
      </FilterListContainer>
    </Box>
  );
}
