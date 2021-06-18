import {
  Box,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import SubHeading from '@/components/SubHeading';

export default function Hero() {

  return (
    <>
      <Box as="section">
        <Box
          maxW="2xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          py={{ base: '16', sm: '20' }}
          textAlign="center"
        >
          <Heading size="2xl" letterSpacing="tight">
            One project{' '}
            <Text as="span" color="orange.500">
              everyday
            </Text>
          </Heading>
          <SubHeading mt="4">
            Create a project every day for a month. You can pick any libray and
            framework you like. It&apos;s meant to improve programming skills by
            building projects.
          </SubHeading>

          <Button
            mt="8"
            as="a"
            href="#"
            colorScheme="orange"
            target="_blank"
            rel="noopener noreferer"
          >
            View source code
          </Button>
        </Box>
      </Box>
    </>
  );
}
