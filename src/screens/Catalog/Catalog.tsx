import React from 'react';
import { Flex } from '@chakra-ui/react';
import useHome from './hooks/useCatalog';
import FilterList from '../../components/FilterList';
import AntiPartnersList from '../../components/AntiPatternsList';
import SearchNotFound from '../../components/SearchNotFound';

import {
  CatalogTItleText,
  SearchDescription,
  SearchTitle,
  SpinnerSearch,
} from './styles';

function Catalog() {
  const {
    filters,
    selectedFilter,
    antiPartnersItems,
    search,
    typing,
    handleClickItem,
  } = useHome();

  return (
    <Flex flexDirection="column">
      {search && !antiPartnersItems.length ? (
        <SearchNotFound search={search} />
      ) : (
        <>
          {search || typing ? (
            <>
              <SearchTitle>Search Results</SearchTitle>
              <SearchDescription>Results for "{search}"</SearchDescription>
            </>
          ) : (
            <CatalogTItleText>
              Micro frontends Anti-patterns Catalog
            </CatalogTItleText>
          )}
          {!search && !typing && (
            <FilterList filters={filters} selectedItem={selectedFilter} />
          )}
          {antiPartnersItems && !typing && (
            <AntiPartnersList
              antiPatterns={antiPartnersItems}
              handleClickItem={handleClickItem}
              search={search}
            />
          )}
          {typing && <SpinnerSearch />}
        </>
      )}
    </Flex>
  );
}

export default Catalog;
