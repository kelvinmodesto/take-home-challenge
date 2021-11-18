import type { FunctionComponent } from 'react';

import { Wrap, Title } from './Body.styles';

import BodyCard from './Card';
const Body: FunctionComponent = () => {
  return (
    <Wrap>
      <Title>
        Let's plan your<strong> saving goal</strong>.
      </Title>
      <BodyCard />
    </Wrap>
  );
};

export default Body;
