import React from 'react';
import { Divider, Flex, Image, Text, Tooltip } from '@chakra-ui/react';
import { ArrowBackIcon, InfoIcon } from '@chakra-ui/icons';
import { FilterProperties } from '../../utils/constants';
import ExampleIcon from '../../assets/example-icon.svg';
import DescriptionIcon from '../../assets/description-icon.svg';
import SolutionIcon from '../../assets/solution-icon.svg';
import {
  AntiPatternNameContainer,
  AntiPatternSectionContainer,
  AntiPatternSectionDescription,
  AntiPatternSectionImageDescription,
  AntiPatternTag,
  HeaderContainer,
  HeaderPathContainer,
  PathHeaderText,
  AntiPatternsSectionImageContainer,
  AntiPatternsSectionImage,
  AntiPatternSectionImageTitle,
} from './styles';
import useDetails from './hooks/useDetails';

const AntiPatternSection = ({
  antiPatternSection,
  iconName,
  sectionTile,
  showDivider,
}: {
  antiPatternSection: { [key: string]: string };
  iconName: string;
  sectionTile: string;
  showDivider?: boolean;
}) => (
  <>
    <AntiPatternSectionContainer
      columns={antiPatternSection.image ? { base: 1, md: 2, lg: 2 } : 0}
    >
      <Flex flexDirection="column" width="fit-content">
        <Flex>
          <Image src={iconName} marginRight="6px" />
          <AntiPatternSectionImageTitle>
            {sectionTile}
          </AntiPatternSectionImageTitle>
        </Flex>
        <AntiPatternSectionDescription>
          {antiPatternSection.text}
        </AntiPatternSectionDescription>
      </Flex>

      {antiPatternSection.image && (
        <AntiPatternsSectionImageContainer>
          <AntiPatternsSectionImage
            src={require(`../../assets/${antiPatternSection.image}`)}
          />
          <AntiPatternSectionImageDescription>
            {antiPatternSection.description}
          </AntiPatternSectionImageDescription>
        </AntiPatternsSectionImageContainer>
      )}
    </AntiPatternSectionContainer>

    {showDivider && <Divider marginTop="28px" color="border" width="97%" />}
  </>
);

export function Details() {
  const { isOpen, onToggle, onOpen, onClose, navigate, antiPatternsData } =
    useDetails();
  if (!antiPatternsData) return null;

  return (
    <Flex flexDirection="column">
      <HeaderContainer>
        <HeaderPathContainer>
          <PathHeaderText
            color="paragraph-text"
            cursor="pointer"
            onClick={() => navigate(-1)}
          >
            Explore the Catalog
          </PathHeaderText>
          <PathHeaderText
            color="paragraph-text"
            marginLeft="8px"
            marginRight="8px"
          >
            /
          </PathHeaderText>
          <PathHeaderText color="primary">
            {antiPatternsData.name}
          </PathHeaderText>
        </HeaderPathContainer>
        <AntiPatternNameContainer>
          <Flex alignItems="center" gap="8px">
            <ArrowBackIcon
              width="24px"
              height="24px"
              _active={{
                transform: 'scale(0.98)',
              }}
              cursor="pointer"
              onClick={() => navigate(-1)}
            />
            <Text fontWeight={700} fontSize={'32px'}>
              {antiPatternsData.name}
            </Text>
          </Flex>
          <AntiPatternTag
            background={FilterProperties[antiPatternsData.category]?.color}
          >
            {antiPatternsData.category}
            <Tooltip
              hasArrow
              bg="title-text"
              color="white"
              label={FilterProperties[antiPatternsData.category]?.hint}
              isOpen={isOpen}
            >
              <InfoIcon
                marginLeft="4px"
                minW="none"
                minHeight="auto"
                height="auto"
                aria-label="more info"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                onClick={onToggle}
              />
            </Tooltip>
          </AntiPatternTag>
        </AntiPatternNameContainer>
      </HeaderContainer>

      <AntiPatternSection
        antiPatternSection={antiPatternsData.problem}
        sectionTile="Description"
        showDivider
        iconName={DescriptionIcon}
      />
      <AntiPatternSection
        antiPatternSection={antiPatternsData.example}
        sectionTile="Occurency in practice example"
        showDivider
        iconName={ExampleIcon}
      />
      <AntiPatternSection
        antiPatternSection={antiPatternsData.solution}
        sectionTile="Solution"
        iconName={SolutionIcon}
      />
    </Flex>
  );
}
