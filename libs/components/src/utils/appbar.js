import { USER_TYPE } from "@monorepo-nx/utils";

const tasks = [
  "ADMINISTRAR_TOMADORES",
  "PROCESSOS_USUARIO",
  "RELATORIO_TOMADOR",
  "LOGOUT",
  "TROCAR_CORRETOR",
  "LOGOUT_SUPER_USER"
];

const permissionsByUserProfile = {
  ADMINISTRAR_TOMADORES: [USER_TYPE.broker],
  PROCESSOS_USUARIO: [USER_TYPE.broker],
  RELATORIO_TOMADOR: [USER_TYPE.broker],
  LOGOUT: [USER_TYPE.broker, USER_TYPE.policyholder],
  TROCAR_CORRETOR: [USER_TYPE.commercial],
  LOGOUT_SUPER_USER: [USER_TYPE.commercial]
};

export const showMenuItem = (userProfile, task) => {
  if (!task || !tasks.includes(task)) return false;

  return permissionsByUserProfile[task].includes(userProfile);
};

export default showMenuItem;
