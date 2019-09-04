import React from 'react';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
import {currentUserSelector} from '../../redux/user/user.selectors';
import {hiddenSelector} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';
import {HeaderComponent, LogoContainer, OptionLink, OptionDiv, OptionsDiv} from './header.styles'

const Header = ({currentUser, hidden}) => (
  <HeaderComponent>
    <LogoContainer to='/'>
      <Logo/>
    </LogoContainer>
    <OptionsDiv>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
    <CartIcon/>
    </OptionsDiv>
    {hidden ? null : (<CartDropdown/>)}
    
    </HeaderComponent>
);



const mapStateToProps =createStructuredSelector(
  {
    currentUser: currentUserSelector,
    hidden: hiddenSelector
  }
)

export default connect(mapStateToProps)(Header);
