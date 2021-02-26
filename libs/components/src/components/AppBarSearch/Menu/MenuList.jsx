import React, { PureComponent, Fragment } from 'react';
import { PoliciesAPI } from '@monorepo-nx/services/api';
import { logout, logoutSuperUser, changeBroker, getUserProfile } from '@monorepo-nx/services/auth';
import showMenuItem from '../../../utils/appbar';
import { MenuItem, MenuItemText } from './styles';
import { USER_TYPE } from '@monorepo-nx/utils';

const downloadCsv = csvFile => {
  const hiddenElement = document.createElement('a');
  hiddenElement.href = `data:text/csv;charset=utf-8,${encodeURI(csvFile)}`;
  hiddenElement.target = '_blank';
  hiddenElement.download = 'processos.csv';
  hiddenElement.click();
};

class MenuList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      csv: null
    };

    this.onRedirectHandler = this.onRedirectHandler.bind(this);
    this.onGetReportHandler = this.onGetReportHandler.bind(this);
    this.openReportPageHandler = this.openReportPageHandler.bind(this);
  }

  onRedirectHandler() {
    window.location = process.env.NX_REACT_APP_PLATAFORMA_TOMADOR;
  }

  openReportPageHandler() {
    window.location = `${process.env.NX_REACT_APP_PLATAFORMA_TOMADOR}reports`;
  }

  async onGetReportHandler() {
    if (!this.state.csv) {
      const { data, status } = await PoliciesAPI.GetBrokerReport();
      await this.setState({
        csv: status === 200 ? data : null
      });
    }

    downloadCsv(this.state.csv);
  }

  getDefaultMenu() {
    return [
      {
        title: 'Administrar tomadores',
        onClick: this.onRedirectHandler,
        userType: 'ADMINISTRAR_TOMADORES'
      },
      {
        title: 'Processos por usuário',
        onClick: this.onGetReportHandler,
        userType: 'PROCESSOS_USUARIO'
      },
      {
        title: 'Relatório tomador',
        onClick: this.openReportPageHandler,
        userType: 'RELATORIO_TOMADOR'
      },
      {
        title: 'Sair da plataforma',
        onClick: () => logout(),
        userType: 'LOGOUT'
      },
      {
        title: 'Trocar corretor',
        onClick: () => changeBroker(),
        userType: 'TROCAR_CORRETOR'
      },
      {
        title: 'Sair da plataforma',
        onClick: () => logoutSuperUser(),
        userType: 'LOGOUT_SUPER_USER'
      }
    ];
  }

  render() {
    const userProfile = getUserProfile();
    const { customMenuItems = [], onCloseMenu } = this.props;

    // Se for comercial, pega apenas o menu padrão. Do contrário, mescla com itens customizados que venham de props
    const items = userProfile === USER_TYPE.commercial ? this.getDefaultMenu() : [...customMenuItems, ...this.getDefaultMenu()];

    userProfile === USER_TYPE.commercial && console.log(this.getDefaultMenu());
    return (
      <Fragment>
        {items
          .filter(menuItem => showMenuItem(userProfile, menuItem.userType))
          .map((menu, index) => {
            return (
              <MenuItem
                key={`${menu.task}-${index}`}
                onClick={args => {
                  menu.onClick(args);
                  onCloseMenu();
                }}
              >
                <MenuItemText>{menu.title}</MenuItemText>
              </MenuItem>
            );
          })}
      </Fragment>
    );
  }
}

export default MenuList;
