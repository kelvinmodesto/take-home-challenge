import type { FunctionComponent } from 'react';

import { CardFooter } from './BodyCardFooter.styles';

const BodyCardFooter: FunctionComponent = ({ children }) => {
  return <CardFooter>{children}</CardFooter>;
};

export default BodyCardFooter;
