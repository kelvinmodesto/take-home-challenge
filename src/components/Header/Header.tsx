import type { FunctionComponent } from 'react';

import { ReactComponent as LogoImage } from 'assets/icons/logo-origin.svg';

import { Wrap } from './Header.styles';
const Header: FunctionComponent = () => {
  return (
    <Wrap>
      <LogoImage className="logo-image" />
    </Wrap>
  );
};

export default Header;
