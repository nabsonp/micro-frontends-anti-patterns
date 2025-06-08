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
    if (pathname !== SCREENS.CATALOG) navigate(SCREENS.CATALOG);
    else dispatch({ type: ACTIONS.CLEAR_FORM });
  };

  const items = useMemo(() => {
    const about: TDrawerHeaderItems = {
      key: DrawerHeaderItemEnum.ABOUT,
      text: 'About the catalog',
      path: SCREENS.ABOUT,
    };
    const exploreTheCatalog: TDrawerHeaderItems = {
      key: DrawerHeaderItemEnum.CATALOG,
      text: 'Explore the Catalog',
      path: SCREENS.CATALOG,
    };
    const microFrontends: TDrawerHeaderItems = {
      key: DrawerHeaderItemEnum.BACKGROUND,
      text: 'What are Micro Frontends?',
      path: SCREENS.BACKGROUND,
    };
    return [exploreTheCatalog, about, microFrontends];
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
