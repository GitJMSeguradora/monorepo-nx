import { isSuperUserLogged } from '@monorepo-nx/services/auth';

export function actionLabel(statusId) {
  switch (statusId) {
    // case 1: //Endorsement
    // return 'Solicitar emissão';
    case 1:
    case 2:
      return 'Retomar processo';
    case 15:
      if (isSuperUserLogged()) {
        return 'Retomar processo';
      } else {
        return '';
      }
    default:
      return '';
  }
}
