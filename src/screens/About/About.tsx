import { Flex, Link, OrderedList, Text } from '@chakra-ui/react';
import { FilterProperties } from '../../utils/constants';
import {
  AckImage,
  CategoryItem,
  ParagraphText,
  ResearcherImage,
  SectionDivider,
  SectionTitle,
  TextLink,
} from './styles';

export const About = () => {
  return (
    <Flex flexDirection="column" gap={'16px'}>
      <Flex flexDirection="column">
        <Text fontWeight={700} fontSize={'32px'} marginBottom={'16px'}>
          About the Catalog
        </Text>

        <ParagraphText>
          This catalog compiles a collection of anti-patterns commonly
          encountered during Micro Frontends architectures design and
          implementation. It is a results from a collaboration between Federal
          University of Amazonas (UFAM) researchers and industry practitioners
          with extensive experience in Micro Frontends.This work is part Nabson
          Silva's master's thesis project. On incorporating the anti-patterns,
          practitioners validated each of them, ensuring they reflect real-world
          problems. We encourage Micro Frontends developers to contribute to the
          catalog by submitting issues or pull requests through the{' '}
          <TextLink href="https://github.com/nabsonp/micro-frontends-anti-patterns">
            Github Repository
          </TextLink>
          .
        </ParagraphText>

        <ParagraphText>
          <br />
          Each anti-pattern is classified into one of the following categories:
        </ParagraphText>

        <OrderedList>
          {Object.entries(FilterProperties).map(([name, data]) => (
            <CategoryItem key={data.color}>
              <b>{name}</b>: {data.hint}
            </CategoryItem>
          ))}
        </OrderedList>
      </Flex>

      <Flex textAlign={'center'} flexDirection="column">
        <SectionDivider />
        <SectionTitle>Related Papers</SectionTitle>
        <Text fontWeight={400} fontSize={'16px'} color={'paragraph-text'}>
          Silva, N., Rodrigues, E., Conte, T. (2025).{' '}
          <b>A Catalog of Micro Frontends Anti–patterns</b>. In Proceedings of
          the 47th International Conference on Software Engineering.
        </Text>
      </Flex>

      <Flex textAlign={'center'} flexDirection="column">
        <SectionDivider />
        <SectionTitle>Researchers</SectionTitle>
        <Text fontWeight={400} fontSize={'16px'} color={'paragraph-text'}>
          <Flex
            gap="24px"
            justifyContent={'center'}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Flex alignItems={'center'} flexDirection="column">
              <ResearcherImage
                src={require('../../assets/researchers/nabson-silva.jpeg')}
              />
              <TextLink href="https://www.researchgate.net/profile/Nabson-Silva">
                Nabson Silva
              </TextLink>
              <Text>nabson.paiva@icomp.ufam.edu.br</Text>
            </Flex>

            <Flex alignItems={'center'} flexDirection="column">
              <ResearcherImage
                src={require('../../assets/researchers/eriky_rodrigues.jpg')}
              />
              <TextLink href="https://www.researchgate.net/profile/Nabson-Silva">
                Eriky Rodrigues
              </TextLink>
              <Text>eriky.rodrigues@icomp.ufam.edu.br</Text>
            </Flex>

            <Flex alignItems={'center'} flexDirection="column">
              <ResearcherImage
                src={require('../../assets/researchers/tayana_conte.jpg')}
              />
              <TextLink href="https://www.researchgate.net/profile/Nabson-Silva">
                Tayana Conte
              </TextLink>
              <Text>tayana@icomp.ufam.edu.br</Text>
            </Flex>
          </Flex>
        </Text>
      </Flex>

      <Flex textAlign={'center'} flexDirection="column">
        <SectionDivider />
        <SectionTitle>Acknowledgment</SectionTitle>

        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          gap="8px"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Link href="https://super.ufam.edu.br/" target="_blank">
            <AckImage src={require('../../assets/ack/super.jpg')} />
          </Link>
          <Link href="https://uses.icomp.ufam.edu.br/" target="_blank">
            <AckImage src={require('../../assets/ack/uses.png')} />
          </Link>
          <Link href="https://www.ufam.edu.br/" target="_blank">
            <AckImage src={require('../../assets/ack/ufam.jpg')} />
          </Link>
          <Link href="https://icomp.ufam.edu.br/" target="_blank">
            <AckImage src={require('../../assets/ack/icomp.jpeg')} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
