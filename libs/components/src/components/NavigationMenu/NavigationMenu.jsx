import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getMenu } from '../../utils/menu';
import Logo, { SlimLogo } from '../Icons/Logo';
import CirclePlus from '../Icons/CirclePlus';
import { Tag } from '@monorepo-nx/components';
import { isSuperUserLogged } from '@monorepo-nx/services/auth';
import { AccountStatementAPI } from '@monorepo-nx/services/api';
import {
  StyledGradientButton,
  NavigationContainer,
  NavigationHeader,
  NavigationList,
  NavigationItem,
  NavigationItemContent,
  NavigationItemIcon,
  NavigationText
} from './styles';

const userType = () => {
  const broker = JSON.parse(localStorage.getItem('broker')) || {};
  const isSuperUser = isSuperUserLogged();
  const userType = isSuperUser ? 'comercial' : broker.user && broker.user.userType === 0 ? 'corretor' : 'tomador';

  return userType;
};

const QUOTE_URL = {
  corretor: process.env.NX_REACT_APP_PLATAFORMA_COTACAO,
  comercial: process.env.NX_REACT_APP_PLATAFORMA_COTACAO,
  tomador: `${process.env.NX_REACT_APP_PLATAFORMA_URL}quote/modalities-express`
};

const hasNotificationBadge = (notifications, id) => {
  if(!notifications || !notifications[id]) {
    return true
  }

  if(notifications[id] && notifications[id].read === false) {
    return true
  }

  return false
}

const NavigationMenu = ({
  collapsed: collapsedProp,
  fixed,
  history,
  activeId,
  clickMenuCallback,
  ...props
}) => {
  const [collapsed, setCollapse] = React.useState(collapsedProp);
  const [notifications, setNotifications] = React.useState(null);
  const [hasNotificationsLoaded, setNotificationsLoaded] = React.useState(false);
  const [isEligibleToBonusClimb, setEligibleToBonusClimb] = React.useState(false);
  const onMouseOverHandler = React.useCallback(() => !fixed && setCollapse(false), [fixed]);
  const onMouseOutHandler = React.useCallback(() => !fixed && setCollapse(true), [fixed]);

  const getMenuItems = () => {
    return getMenu(userType(), null, isEligibleToBonusClimb);
  };

  const menuItems = getMenuItems();

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();

    async function checkBrokerEligibility() {
      try {
        await AccountStatementAPI.checkEligibility(currentYear);

        setEligibleToBonusClimb(true)
      } catch (error) {
        setEligibleToBonusClimb(false)
      }
    }

    checkBrokerEligibility();
  }, []);

  return (
    <NavigationContainer
      {...props}
      collapsed={collapsed}
      fixed={fixed}
      onMouseEnter={onMouseOverHandler}
      onMouseLeave={onMouseOutHandler}
      onClick={clickMenuCallback && (e => clickMenuCallback(e))}
    >
      <NavigationHeader collapsed={collapsed}>
        {collapsed ? <SlimLogo /> : <Logo width="108px" height="48px" />}

        <StyledGradientButton href={QUOTE_URL[userType()]} id="cotacao-emissao">
          <CirclePlus />
          {!collapsed && <span>cotação/emissão</span>}
        </StyledGradientButton>
      </NavigationHeader>

      <NavigationList collapsed={collapsed}>
      {menuItems.map(({ text, icon, renderAs, pathname, iconProps, contentProps, ...props }) => {
        const showBadge = hasNotificationsLoaded && (iconProps && iconProps.showNotification) ? hasNotificationBadge(notifications || null, props.id) : false;
        return(
          <NavigationItem {...props} active={props.id === activeId} key={props.id}>
            <NavigationItemContent
              id={props.id}
              active={props.id === activeId}
              collapsed={collapsed}
              {...contentProps}
            >
              {icon &&
              <NavigationItemIcon
                component={icon}
                showBadge={showBadge}
                collapsed={collapsed}
                {...iconProps}
              />}

              {!collapsed &&
                <div>
                  <NavigationText>{text}</NavigationText>
                  {showBadge && <Tag text="Novo" />}
                </div>
              }
            </NavigationItemContent>
          </NavigationItem>
        )
      })}
      </NavigationList>
    </NavigationContainer>
  );
};

NavigationMenu.defaultProps = {
  fixed: false,
  collapsed: true,
  clickMenuCallback: () => {}
};

NavigationMenu.propTypes = {
  fixed: PropTypes.bool,
  collapsed: PropTypes.bool,
  activeId: PropTypes.string,
  clickMenuCallback: PropTypes.func
};

export default withRouter(NavigationMenu);
