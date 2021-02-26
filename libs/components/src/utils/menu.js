import TagManager from "react-gtm-module";
import { getUserProfile } from "@monorepo-nx/services/auth";
import { ALL_PERMISSIONS, hasPermission } from "@monorepo-nx/utils";
import { USER_TYPE } from "@monorepo-nx/utils";

import Express from "../components/Icons/NavigationMenu/Express";
import Paper from "../components/Icons/NavigationMenu/Paper";
import Pencil from "../components/Icons/NavigationMenu/Pencil";
import Dashboard from "../components/Icons/NavigationMenu/Dashboard";
import Barcode from "../components/Icons/NavigationMenu/Barcode";
import Extrato from "../components/Icons/NavigationMenu/Extrato";
import Person from "../components/Icons/NavigationMenu/Person";
import Help from "../components/Icons/NavigationMenu/Help";
import Report from "../components/Icons/NavigationMenu/Report";
import Escalada from "../components/Icons/NavigationMenu/EscaladaBonus";

const handleClickBonusClimb = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: "Click - menu escalada"
    }
  });

};

const handleClickExtract = e => {
  TagManager.dataLayer({
    dataLayer: {
      event: "Click - extrato novo"
    }
  });

};

const items = [
  {
    id: "painel-express",
    name: "painel-express",
    text: "Modalidades Express",
    icon: Express,
    iconProps: {
      style: { width: "31px", marginLeft: "-8px" }
    },
    contentProps: {
      href: process.env.NX_REACT_APP_PLATAFORMA_EXPRESS
    }
  },
  {
    id: "painel-processos",
    name: "painel-processos",
    text: "Lista de processos",
    icon: Paper,
    contentProps: {
      href: process.env.NX_REACT_APP_PLATAFORMA_PROCESSOS
    }
  },
  {
    id: "painel-endosso",
    name: "painel-endosso",
    text: "Iniciar um endosso",
    icon: Pencil,
    contentProps: {
      href: process.env.NX_REACT_APP_PLATAFORMA_ENDOSSO
    }
  },
  {
    id: "painel-corretor",
    name: "painel-corretor",
    text: "Painel do corretor",
    icon: Dashboard,
    contentProps: {
      href: process.env.NX_REACT_APP_PLATAFORMA_PAINEL
    }
  },
  {
    id: "painel-boletos",
    name: "painel-boletos",
    text: "Painel de boletos",
    icon: Barcode,
    contentProps: {
      href: process.env.NX_REACT_APP_PLATAFORMA_BOLETOS
    }
  },
  {
    id: "extrato-corretor",
    name: "extrato-corretor",
    text: "Extrato do corretor",
    icon: Extrato,
    iconProps: {
      showNotification: true
    },
    contentProps: {
      onClick: e => handleClickExtract(e),
      href: process.env.NX_REACT_APP_PLATAFORMA_EXTRATO
    }
  },
  {
    id: "escalada-bonus",
    name: "escalada-bonus",
    text: "Escalada de bônus",
    icon: Escalada,
    iconProps: {
      showNotification: true
    },
    contentProps: {
      onClick: e => handleClickBonusClimb(e),
      href: process.env.NX_REACT_APP_PLATAFORMA_ESCALADA
    }
  },
  {
    id: "painel-tomador",
    name: "painel-tomador",
    text: "Painel do tomador",
    icon: Person,
    contentProps: {
      target: "_blank",
      href: "https://sistemas.juntoseguros.com/gv"
    }
  },
  {
    id: "painel-ajuda",
    name: "painel-ajuda",
    text: "Central de ajuda",
    icon: Help,
    contentProps: {
      href: process.env.NX_REACT_APP_PLATAFORMA_AJUDA
    }
  },
  {
    id: "reports",
    name: "relatorio",
    text: "Relatórios",
    icon: Report,
    contentProps: {
      href: process.env.NX_REACT_APP_PLATAFORMA_RELATORIOS
    }
  }
];

const profileMenu = {
  corretor: [
    "painel-express",
    "painel-processos",
    "painel-endosso",
    "painel-corretor",
    "painel-boletos",
    "extrato-corretor",
    "escalada-bonus",
    "painel-tomador",
    "painel-ajuda"
  ],
  tomador: ["reports", "painel-processos"],
  comercial: [
    "painel-express",
    "painel-endosso",
    "painel-processos",
    "escalada-bonus"
  ]
};

const filter = (
  arr,
  menuItems,
  userType,
  filterMenu,
  isEligibleToBonusClimb
) => {
  let menu = arr.filter(item => {
    return menuItems[userType].includes(item.id);
  });

  if (
    getUserProfile() === USER_TYPE.policyholder &&
    !hasPermission(ALL_PERMISSIONS.report)
  ) {
    menu = menu.filter(e => e.id !== "reports");
  }

  if (!isEligibleToBonusClimb) {
    menu = menu.filter(e => e.id !== "escalada-bonus");
  }

  return filterMenu ? filterMenu(menu) : menu;
};

export const getMenu = (userType, filterMenu, isEligibleToBonusClimb) =>
  filter(items, profileMenu, userType, filterMenu, isEligibleToBonusClimb);
