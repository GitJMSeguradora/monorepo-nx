import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu as MenuComponent } from './styles';

const Menu = props => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { open, children, keepMounted, triggerComponent: TriggerComponent, ...rest } = props;

  const onOpenMenu = () => setMenuOpen(true);
  const onCloseMenu = () => setMenuOpen(false);

  const updatedChildren = React.Children.map(children, child =>
    React.cloneElement(child, {
      ...child.props,
      onOpenMenu,
      onCloseMenu
    })
  );

  return (
    <Fragment>
      <TriggerComponent data-testid="menu-options" className="trigger-component" onClick={onOpenMenu} {...rest} />
      <MenuComponent
        open={menuOpen}
        onClose={onCloseMenu}
        anchorEl={() => document.querySelector('.trigger-component')}
        getContentAnchorEl={null}
        disableAutoFocusItem
        anchorReference="anchorEl"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted={keepMounted}
      >
        {updatedChildren}
      </MenuComponent>
    </Fragment>
  );
};

Menu.defaultProps = {
  open: false,
  keepMounted: false
};

Menu.propTypes = {
  open: PropTypes.bool,
  keepMounted: PropTypes.bool
};

export default Menu;
