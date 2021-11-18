import type { FunctionComponent } from 'react';

import { CardSection } from './BodyCardSection.styles';

const Body: FunctionComponent = ({ children }) => {
  return <CardSection>{children}</CardSection>;
};

export default Body;
