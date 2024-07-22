/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import HeaderLogo from '../../assets/header-logo.svg';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Search2Icon, HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
  DrawerButton,
  HeaderContainer,
  LogoContainer,
  SearchBarContainer,
  StyledDivider,
} from './styles';
import useHeader from './hooks/useHeader';
import { TDrawerHeaderItems } from './hooks/types';
import { NavLink } from 'react-router-dom';
import { theme } from '../../theme/theme';
import { ACTIONS } from '../../reducer/searchReducer';

const activeStyle = {
  backgroundColor: theme.colors['primary-active'],
  fontWeight: 'bold',
};

function RenderItems({
  isColumn = false,
  items,
}: {
  isColumn?: boolean;
  items: TDrawerHeaderItems[];
}) {
  return (
    <>
      {items.map((item) => (
        <Button
          key={item.key}
          to={item.path}
          as={NavLink}
          marginTop={isColumn ? '16px' : '0px'}
          color={'primary'}
          background={'transparent'}
          _active={{
            bg: 'primary-active',
            transform: 'scale(0.98)',
          }}
          _hover={{ bg: 'primary-active' }}
          borderRadius="24px"
          textAlign="center"
          justifyContent="center"
          //@ts-ignore
          style={({ isActive }: { isActive: boolean }) =>
            isActive ? activeStyle : { fontWeight: 'normal' }
          }
        >
          {item.text}
        </Button>
      ))}
    </>
  );
}

export function Header() {
  const {
    isOpen,
    items,
    onOpen,
    onClose,
    setInputFocus,
    inputFocus,
    inputRef,
    navigateBack,
    setQuery,
    query,
  } = useHeader();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setQuery({
        type: ACTIONS.USER_TYPING,
        payload: inputRef?.current?.value || '',
      });
      setQuery({
        type: ACTIONS.USER_STOP_TYPING,
      });
    }
  };

  return (
    <>
      <HeaderContainer>
        <LogoContainer
          onClick={() => {
            if (inputRef && inputRef.current) inputRef.current.value = '';
            navigateBack();
          }}
          cursor="pointer"
        >
          <Image
            src={HeaderLogo}
            width={{
              base: '120px',
              md: '146px',
              lg: '146px',
            }}
          />
        </LogoContainer>

        <SearchBarContainer>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={'text'}
              placeholder="Search anti-patterns, text or categories"
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              onChange={(event) => {
                navigateBack();
                setQuery({
                  type: ACTIONS.USER_TYPING,
                  payload: event.target.value,
                });
              }}
              onKeyDown={handleKeyDown}
              ref={inputRef}
            />
            <InputRightElement>
              {!query ? (
                <Search2Icon
                  color={inputFocus ? 'primary' : 'paragraph-text'}
                />
              ) : (
                <SmallCloseIcon
                  color={'primary'}
                  boxSize="24px"
                  cursor="pointer"
                  onClick={() => {
                    if (inputRef && inputRef.current)
                      inputRef.current.value = '';
                    navigateBack();
                  }}
                />
              )}
            </InputRightElement>
          </InputGroup>
        </SearchBarContainer>

        <DrawerButton
          aria-label="Open Menu"
          onClick={onOpen}
          icon={<HamburgerIcon h="32px" w="32px" />}
        />

        {/* <Box display={{ base: 'none', lg: 'block', xl: 'block' }}>
          <RenderItems items={items} />
        </Box> */}
      </HeaderContainer>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex flexDirection="column" marginTop={'64px'}>
              <Box
                alignSelf={'center'}
                onClick={() => {
                  if (inputRef && inputRef.current) inputRef.current.value = '';
                  navigateBack();
                }}
                cursor="pointer"
              >
                <Image src={HeaderLogo} width="217px" />
              </Box>
              <StyledDivider />
              <RenderItems isColumn items={items} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
