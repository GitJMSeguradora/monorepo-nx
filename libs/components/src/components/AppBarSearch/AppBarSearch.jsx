import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Avatar from './Avatar';
import Menu, { MenuList } from './Menu';
import Search from './Search';
import {
  InputContainer,
  Tooltip,
  BackButtonIcon,
  BackButton,
  Container,
  AvatarContainer
} from './styles';

const getUser = () => {
  const broker = JSON.parse(localStorage.getItem('broker')) || {};
  return broker.user ? broker.user : null;
};

const AppBarSearch = ({
  children,
  hideInput,
  hideFilter,
  backButton = false,
  inputProps,
  customMenuItems,
  ...props
}) => {
  const user = getUser();

  const goBackFunction = () => {
    const inReport = window.location.origin.includes('5006') || window.location.origin.includes('extrato');
    let urlDestiny = '';

    if (inReport) {
      urlDestiny = process.env.NX_REACT_APP_PLATAFORMA_PROCESSOS;
    } else {
      urlDestiny = window.location.origin;
    }

    window.location.href = urlDestiny;
  }

  return (
    <Header>
      <Container>
        {backButton && (
          <BackButton onClick={goBackFunction}>
            <BackButtonIcon />
            Voltar
          </BackButton>
        )}

        <InputContainer>
          {!hideInput && <Search showFilter={!hideFilter} {...inputProps} />}
        </InputContainer>
      </Container>

      {user && user.userName && (
        <Menu
          keepMounted={false}
          triggerComponent={triggerProps => (
            <Tooltip title={user.userName}>
              <AvatarContainer>
                <Avatar {...triggerProps}>{user.userName[0]}</Avatar>
              </AvatarContainer>
            </Tooltip>
          )}
        >
          <MenuList user={user} customMenuItems={customMenuItems} />
        </Menu>
      )}
    </Header>
  );
};

AppBarSearch.defaultProps = {
  hideInput: false,
  hideFilter: true,
  inputProps: {
    value: ''
  }
};

AppBarSearch.propTypes = {
  hideInput: PropTypes.bool,
  hideFilter: PropTypes.bool,
  inputProps: PropTypes.shape({
    label: PropTypes.string
  })
};

export default memo(AppBarSearch);
