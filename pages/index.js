import { SimpleGrid } from '@chakra-ui/react';
import BaseLayout from '@/layouts/base';
import Card from '@/components/Card';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <BaseLayout title="Home">
      <Hero />
      <SimpleGrid minChildWidth="210px" spacing="4">
        <Card height="160px" />
        <Card height="160px" />
        <Card height="160px" />
        <Card height="160px" />
        <Card height="160px" />
        <Card height="160px" />
      </SimpleGrid>
    </BaseLayout>
  );
}
