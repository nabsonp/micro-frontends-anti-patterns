import React from 'react';
import { Divider, Flex, Text, Tooltip } from '@chakra-ui/react';
import { ArrowBackIcon, InfoIcon } from '@chakra-ui/icons';
import { FilterProperties } from '../../utils/constants';
import { Icon } from '@chakra-ui/react';
import { LuCircleAlert } from 'react-icons/lu';
import { BiDuplicate } from 'react-icons/bi';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';
import { LuSquareEqual } from 'react-icons/lu';
import { MdOutlineMedicalServices } from 'react-icons/md';
import { BiNote } from 'react-icons/bi';
import { BiRename } from 'react-icons/bi';
import {
  AntiPatternNameContainer,
  AntiPatternSectionContainer,
  AntiPatternSectionDescription,
  AntiPatternTag,
  HeaderContainer,
  HeaderPathContainer,
  PathHeaderText,
  AntiPatternsSectionImageContainer,
  AntiPatternsSectionImage,
  AntiPatternSectionImageTitle,
  AntiPatternSectionLink,
  RelatedAntiPatternLink,
} from './styles';
import useDetails from './hooks/useDetails';
import { SCREENS } from '../../utils/screens';
import {
  HyoerlinkField,
  RelatedAntiPatternField,
  TextImageField,
} from '../../components/AntiPatternsList/types';

const AntiPatternSection = ({
  data,
  icon,
  sectionTile,
  showDivider,
}: {
  data: TextImageField | HyoerlinkField[] | RelatedAntiPatternField[] | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  sectionTile: string;
  showDivider?: boolean;
}) => {
  if (typeof data === 'string') {
    if (data === '') {
      return null;
    }

    return (
      <>
        <AntiPatternSectionContainer columns={0}>
          <Flex flexDirection="column" width="fit-content">
            <Flex alignItems={'center'} gap="4px">
              <Icon as={icon} w={5} h={5} color="#FF6D00" />
              <AntiPatternSectionImageTitle>
                {sectionTile}
              </AntiPatternSectionImageTitle>
            </Flex>
            <AntiPatternSectionDescription>
              {data}
            </AntiPatternSectionDescription>
          </Flex>
        </AntiPatternSectionContainer>

        {showDivider && <Divider marginTop="28px" color="border" width="97%" />}
      </>
    );
  }

  if (Array.isArray(data)) {
    if (data.length === 0) {
      return null;
    }

    return (
      <>
        <AntiPatternSectionContainer columns={0}>
          <Flex flexDirection="column" width="fit-content">
            <Flex alignItems={'center'} gap="4px">
              <Icon as={icon} w={5} h={5} color="#FF6D00" />
              <AntiPatternSectionImageTitle>
                {sectionTile}
              </AntiPatternSectionImageTitle>
            </Flex>
            {data
              ? data.map((item) =>
                  'href' in item ? (
                    <AntiPatternSectionLink
                      key={item.title}
                      href={item.href}
                      isExternal
                    >
                      {item.title}
                    </AntiPatternSectionLink>
                  ) : (
                    <RelatedAntiPatternLink
                      key={item.title}
                      to={`/details/${item.title}`}
                    >
                      {item.title}
                    </RelatedAntiPatternLink>
                  )
                )
              : '-'}
          </Flex>
        </AntiPatternSectionContainer>

        {showDivider && <Divider marginTop="28px" color="border" width="97%" />}
      </>
    );
  }

  return (
    <>
      <AntiPatternSectionContainer
        columns={data.image ? { base: 1, md: 2, lg: 2 } : 0}
      >
        <Flex flexDirection="column" width="fit-content">
          <Flex alignItems={'center'} gap="4px">
            <Icon as={icon} w={5} h={5} color="#FF6D00" />
            <AntiPatternSectionImageTitle>
              {sectionTile}
            </AntiPatternSectionImageTitle>
          </Flex>
          <AntiPatternSectionDescription>
            {data.text}
          </AntiPatternSectionDescription>
        </Flex>

        {data.image && (
          <AntiPatternsSectionImageContainer>
            <AntiPatternsSectionImage
              src={require(`../../assets/${data.image}`)}
            />
          </AntiPatternsSectionImageContainer>
        )}
      </AntiPatternSectionContainer>

      {showDivider && <Divider marginTop="28px" color="border" width="97%" />}
    </>
  );
};

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
            onClick={() => navigate(SCREENS.CATALOG)}
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
              onClick={() => navigate(SCREENS.CATALOG)}
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

      {antiPatternsData.alsoKnownAs && (
        <AntiPatternSection
          data={antiPatternsData.alsoKnownAs}
          sectionTile="Also known as"
          showDivider
          icon={BiRename}
        />
      )}

      <AntiPatternSection
        data={antiPatternsData.problem}
        sectionTile="Problem"
        showDivider
        icon={LuCircleAlert}
      />
      <AntiPatternSection
        data={antiPatternsData.symptomsAndConsequences}
        sectionTile="Symptoms and Consequences"
        showDivider
        icon={MdOutlineMedicalServices}
      />
      <AntiPatternSection
        data={antiPatternsData.solution}
        sectionTile="Solution"
        showDivider
        icon={FaRegCheckCircle}
      />
      <AntiPatternSection
        data={antiPatternsData.resultingContext}
        sectionTile="Resulting Context"
        showDivider
        icon={LuSquareEqual}
      />
      <AntiPatternSection
        data={antiPatternsData.example}
        sectionTile="Example"
        showDivider
        icon={BiWorld}
      />
      <AntiPatternSection
        data={antiPatternsData.notes || ''}
        sectionTile="Notes"
        showDivider
        icon={BiNote}
      />
      <AntiPatternSection
        data={antiPatternsData.relatedAntiPatterns}
        sectionTile="Related Anti-patterns"
        showDivider
        icon={BiDuplicate}
      />
      <AntiPatternSection
        data={antiPatternsData.references}
        sectionTile="References"
        icon={FiExternalLink}
      />
    </Flex>
  );
}
