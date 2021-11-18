import type { FunctionComponent } from 'react';

import {
  CardHeader,
  CardHeaderText,
  CardHeaderTitle,
  CardHeaderSubtitle,
} from './BodyCardHeader.styles';

import { ReactComponent as CardHeaderLogo } from 'assets/icons/buy-a-house.svg';

const Body: FunctionComponent = () => {
  return (
    <CardHeader>
      <CardHeaderLogo />
      <CardHeaderText>
        <CardHeaderTitle>Buy a house</CardHeaderTitle>
        <CardHeaderSubtitle>Saving goal</CardHeaderSubtitle>
      </CardHeaderText>
    </CardHeader>
  );
};

export default Body;
