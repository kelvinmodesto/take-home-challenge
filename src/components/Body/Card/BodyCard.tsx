import type { FunctionComponent } from 'react';

import {
  Card,
  CardSectionText,
  CardSectionValue,
  CardFooterCost,
  CardFooterCostText,
  CardFooterCostValues,
  CardFooterText,
} from './BodyCard.styles';

import BodyCardAction from './Action';
import BodyCardFooter from './Footer';
import BodyCardHeader from './Header';
import BodyCardSection from './Section';

const Body: FunctionComponent = () => {
  return (
    <Card>
      <BodyCardHeader />
      <BodyCardSection>
        <>
          <CardSectionText>Total ammount</CardSectionText>
          <CardSectionValue>
            <span>$</span> 25,000
          </CardSectionValue>
        </>
      </BodyCardSection>
      <BodyCardSection>
        <>
          <CardSectionText>Reach goal by</CardSectionText>
          <CardSectionValue>October</CardSectionValue>
        </>
      </BodyCardSection>
      <BodyCardFooter>
        <>
          <CardFooterCost>
            <CardFooterCostText>Monthly Cost</CardFooterCostText>
            <CardFooterCostValues>$ 520.83</CardFooterCostValues>
          </CardFooterCost>
          <CardFooterText>
            You’re planning <strong>48 monthly deposits</strong> to reach your{' '}
            <strong>$25,000</strong> goal by <strong>October 2020</strong>.
          </CardFooterText>
        </>
      </BodyCardFooter>
      <BodyCardAction>Confirm</BodyCardAction>
    </Card>
  );
};

export default Body;
