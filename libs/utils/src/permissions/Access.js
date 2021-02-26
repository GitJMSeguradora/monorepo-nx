import Cookies from 'js-cookie';
import { getUserProfile, logout } from '@monorepo-nx/services/auth';
import { USER_TYPE, USER_ACCESS_COOKIE } from '@monorepo-nx/utils';

const authToken = Cookies.getJSON(USER_ACCESS_COOKIE);

// This object is all permissions possibles for any user type
export const ALL_PERMISSIONS = {
  report: "permission.policyholder.reports",
  issue: "permission.policyholder.issue",
  userManager: "permission.policyholder.user.manager"
};

// This object is the current commercial permissions as long we haven't this in database
export const CURRENT_COMMERCIAL_PERMISSIONS = [
  ALL_PERMISSIONS.userManager,
];

export const getUserPermissions = () => {
  let permissions = [];

  if (!authToken || !authToken.permissions) {
    logout();
  } else {
    permissions = authToken.permissions;
  }

  return permissions;
};

export const hasPermission = (requiredPermission) => {
  const userProfile = getUserProfile();
  let hasPermission = false;
  const permissions = getUserPermissions();

  if (userProfile === USER_TYPE.broker) {
    hasPermission = true;
  }

  if (userProfile === USER_TYPE.policyholder) {
    hasPermission = permissions.indexOf(requiredPermission) >= 0;
  }

  if (userProfile === USER_TYPE.comercial) {
    hasPermission = CURRENT_COMMERCIAL_PERMISSIONS.indexOf(requiredPermission) >= 0;
  }

  return hasPermission;
};

export const hasPermissionByUserProfile = (userProfiles) => {
  const currentUserProfile = getUserProfile();
  const hasPermission = userProfiles.indexOf(currentUserProfile) >= 0;
  return hasPermission;
};
