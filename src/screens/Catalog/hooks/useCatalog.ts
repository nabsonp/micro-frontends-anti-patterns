import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { FilterItemsEnum } from '../../../utils/constants';
import { TFilterItems } from '../../../components/FilterList/types';
import antiPatternsFiles from '../../../anti-patterns';

import { TAntiPatternsItem } from '../../../components/AntiPatternsList/types';

import { useNavigate } from 'react-router-dom';
import { WrapperContext } from '../../../components/Wrapper/Wrapper';
import { ACTIONS } from '../../../reducer/searchReducer';

const HIGHLIGH_INTERVAL = 100;
const data = antiPatternsFiles as TAntiPatternsItem[];

const useCatalog = () => {
  const { query, search, typing, dispatch, debouncedQuery } =
    useContext(WrapperContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = ` Micro Frontends Anti-patterns Catalog`;
  });

  useEffect(() => {
    if (query === '') dispatch({ type: ACTIONS.CLEAR_FORM });
    else
      debouncedQuery === query && dispatch({ type: ACTIONS.USER_STOP_TYPING });
  }, [debouncedQuery, dispatch, query]);

  const [selectedFilter, setSelectedFilter] = useState<string>(
    FilterItemsEnum.ALL
  );
  const [filteredData, setFilteredData] = useState<TAntiPatternsItem[]>([]);

  const searchData = useCallback(() => {
    if (!search) {
      setFilteredData(data);
      return;
    }
    setSelectedFilter(FilterItemsEnum.ALL);
    setFilteredData(
      data.filter((item) => {
        if (item.example.text.toLowerCase().includes(search.toLowerCase())) {
          const indexString = item.example.text
            .toLowerCase()
            .indexOf(search.toLowerCase());
          item.highlight = `...${item.example.text.substring(
            indexString - HIGHLIGH_INTERVAL,
            indexString + HIGHLIGH_INTERVAL
          )}...`;
          return true;
        }
        if (item.problem.text.toLowerCase().includes(search.toLowerCase())) {
          const indexString = item.problem.text
            .toLowerCase()
            .indexOf(search.toLowerCase());
          item.highlight = `...${item.problem.text.substring(
            indexString - HIGHLIGH_INTERVAL,
            indexString + HIGHLIGH_INTERVAL
          )}...`;
          return true;
        }
        if (item.solution.text.toLowerCase().includes(search.toLowerCase())) {
          const indexString = item.solution.text
            .toLowerCase()
            .indexOf(search.toLowerCase());
          item.highlight = `...${item.solution.text.substring(
            indexString - HIGHLIGH_INTERVAL,
            indexString + HIGHLIGH_INTERVAL
          )}...`;
          return true;
        }
        if (item.name.toLowerCase().includes(search.toLowerCase())) return true;
      })
    );
  }, [data, search]);

  useEffect(() => {
    if (!typing) searchData();
  }, [typing, searchData, search]);

  const filtersItemsCount = useCallback(
    (filterType: string) => {
      return data.reduce(
        (count, arrayEle) =>
          arrayEle.category === filterType ? count + 1 : count,
        0
      );
    },
    [data]
  );

  const filterData = useCallback(
    (filterType: string) => {
      if (filterType === FilterItemsEnum.ALL) return setFilteredData(data);
      setFilteredData(data.filter((item) => item.category === filterType));
    },
    [data]
  );

  const filters = useMemo(() => {
    const uniqueFiltersMap = new Map();
    data.forEach((item) => {
      if (!uniqueFiltersMap.has(item.category)) {
        uniqueFiltersMap.set(item.category, {
          key: item.category,
          text: item.category,
          count: filtersItemsCount(item.category),
          handleClick: () => {
            setSelectedFilter(item.category);
            filterData(item.category);
          },
        });
      }
    });

    const all: TFilterItems = {
      key: FilterItemsEnum.ALL,
      text: 'All Anti-patterns',
      count: data.length,
      handleClick: () => {
        setSelectedFilter(FilterItemsEnum.ALL);
        filterData(FilterItemsEnum.ALL);
      },
    };

    return [all, ...Array.from(uniqueFiltersMap.values())];
  }, [filtersItemsCount, data]);

  const handleClickItem = useCallback((data: TAntiPatternsItem) => {
    navigate(`/details/${data.name}`);
  }, []);

  return {
    filters,
    selectedFilter,
    antiPartnersItems: filteredData,
    search,
    typing,
    handleClickItem,
  };
};

export default useCatalog;
