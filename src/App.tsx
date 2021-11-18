import Body from 'components/Body';
import Header from 'components/Header';

import { Wrap } from './App.styles';
export function App(): JSX.Element {
  return (
    <Wrap>
      <Header />
      <Body />
    </Wrap>
  );
}
