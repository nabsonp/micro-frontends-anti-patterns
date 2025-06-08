import { Flex, Text } from '@chakra-ui/react';
import { ParagraphText } from './styles';

export const Background = () => {
  return (
    <Flex flexDirection="column" gap={'16px'}>
      <Flex flexDirection="column">
        <Text fontWeight={700} fontSize={'32px'} marginBottom={'16px'}>
          What are Micro Frontends?
        </Text>

        <ParagraphText>
          The following presentation was used to introduce undergraduate
          students to Micro Frontends. It aims to clarify the main concepts and
          facilitate a better understanding of the related anti-patterns.
        </ParagraphText>

        <iframe
          src="https://drive.google.com/file/d/1ZxOdOGSLnSTUXX9IhWREgYjzvUpThWID/preview"
          width="100%"
          height="600px"
          title="PDF Viewer"
        />
      </Flex>
    </Flex>
  );
};
