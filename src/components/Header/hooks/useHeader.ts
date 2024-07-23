import { useContext, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DrawerHeaderItemEnum } from '../../../utils/constants';
import { SCREENS } from '../../../utils/screens';
import { TDrawerHeaderItems } from './types';
import { useDisclosure } from '@chakra-ui/react';
import { WrapperContext } from '../../Wrapper/Wrapper';
import { ACTIONS } from '../../../reducer/searchReducer';

const useHeader = () => {
  const { dispatch, query } = useContext(WrapperContext);
  const { pathname } = useLocation();

  const [inputFocus, setInputFocus] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const navigateBack = () => {
    if (pathname !== SCREENS.CATALOG) navigate(-1);
    else dispatch({ type: ACTIONS.CLEAR_FORM });
  };

  const items = useMemo(() => {
    const exploreTheCatalog: TDrawerHeaderItems = {
      key: DrawerHeaderItemEnum.CATALOG,
      text: 'Explore the Catalog',
      path: SCREENS.CATALOG,
    };
    return [exploreTheCatalog];
  }, [navigate]);

  return {
    isOpen,
    items,
    onOpen,
    onClose,
    setInputFocus,
    inputFocus,
    inputRef,
    navigateBack,
    setQuery: dispatch,
    query,
  };
};

export default useHeader;
