import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { MoreIcon, Menu } from './MenuMoreStyles';

class MenuMore extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: props.open,
      anchorEl: null
    };

    this.onOpenMenuHandler = this.onOpenMenuHandler.bind(this);
    this.onCloseMenuHandler = this.onCloseMenuHandler.bind(this);
  }

  onOpenMenuHandler(e) {
    e.stopPropagation();
    this.setState({ isMenuOpen: true, anchorEl: e.currentTarget });
  }

  onCloseMenuHandler(e) {
    e.stopPropagation();
    this.setState({ isMenuOpen: false, anchorEl: null });
  }

  render() {
    const { open, children, keepMounted, ...rest } = this.props;
    const { isMenuOpen, anchorEl } = this.state;

    const updatedChildren = React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        ...child.props,
        onClick: e => {
          child.props.onClick(e);
          this.onCloseMenuHandler(e);
        }
      })
    );

    return (
      <Fragment>
        <IconButton className="icon-button__more" onClick={this.onOpenMenuHandler} {...rest}>
          <MoreIcon />
        </IconButton>
        <Menu
          open={isMenuOpen}
          onClose={this.onCloseMenuHandler}
          anchorEl={anchorEl}
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
        </Menu>
      </Fragment>
    );
  }
}

MenuMore.defaultProps = {
  open: false,
  keepMounted: false
};

MenuMore.propTypes = {
  open: PropTypes.bool,
  keepMounted: PropTypes.bool
};

export default MenuMore;
