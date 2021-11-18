import type { FunctionComponent } from 'react';

import {
  Button,
  Card,
  Wrap,
  Title,
  CardFooter,
  CardFooterCost,
  CardFooterCostText,
  CardFooterCostValues,
  CardFooterText,
  CardHeader,
  CardHeaderText,
  CardHeaderTitle,
  CardHeaderSubtitle,
  CardSection,
  CardSectionText,
  CardSectionValue,
} from './Body.styles';
import { ReactComponent as CardHeaderLogo } from 'assets/icons/buy-a-house.svg';

const Body: FunctionComponent = () => {
  return (
    <Wrap>
      <Title>
        Let's plan your<strong> saving goal</strong>.
      </Title>
      <Card>
        <CardHeader>
          <CardHeaderLogo />
          <CardHeaderText>
            <CardHeaderTitle>Buy a house</CardHeaderTitle>
            <CardHeaderSubtitle>Saving goal</CardHeaderSubtitle>
          </CardHeaderText>
        </CardHeader>
        <CardSection>
          <CardSectionText>Total ammount</CardSectionText>
          <CardSectionValue>
            <span>$</span> 25,000
          </CardSectionValue>
        </CardSection>
        <CardSection>
          <CardSectionText>Reach goal by</CardSectionText>
          <CardSectionValue>October</CardSectionValue>
        </CardSection>
        <CardFooter>
          <CardFooterCost>
            <CardFooterCostText>Monthly Cost</CardFooterCostText>
            <CardFooterCostValues>$ 520.83</CardFooterCostValues>
          </CardFooterCost>
          <CardFooterText>
            You’re planning <strong>48 monthly deposits</strong> to reach your{' '}
            <strong>$25,000</strong> goal by <strong>October 2020</strong>.
          </CardFooterText>
        </CardFooter>
        <Button>Confirm</Button>
      </Card>
    </Wrap>
  );
};

export default Body;
