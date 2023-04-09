import { Projectslist } from '@/entities';
import { Noise } from '@/features';
import { Container } from '@/shared/ui';
import { Header } from '@/widgets';

export const Main = () => {
  return (
    <>
      <Noise />
      <Header />
      <Container>
        <Projectslist />
      </Container>
    </>
  );
};
