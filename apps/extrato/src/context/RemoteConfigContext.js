/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import jwt from 'jwt-decode';
import Cookies from 'js-cookie';
import { USER_ACCESS_COOKIE } from '@monorepo-nx/utils';
import { remoteConfig } from '../config/firebase';

const RemoteConfigStateContext = createContext();
const RemoteConfigDispatchContext = createContext();

const FIREBASE_TYPES = {
  FETCH: 'firebase/FETCH',
  SUCCESS: 'firebase/SUCCESS',
  FAILED: 'firebase/FAILED'
};

const TYPES = {
  SUSEP: 'susep/REGISTER_VALIDATION'
};

const INITIAL_STATE = {
  isFetching: false,
  isSusepValidated: false,
  error: null,
  config: {
    appOn: true,
    susepCheck: false
  }
};

function RemoteConfigReducer(state, action) {
  switch (action.type) {
    case FIREBASE_TYPES.FETCH: {
      return { ...state, isFetching: true };
    }
    case FIREBASE_TYPES.SUCCESS: {
      return { ...state, config: action.payload, isFetching: false };
    }
    case FIREBASE_TYPES.FAILED: {
      return { ...state, error: 'ERROR', isFetching: false };
    }
    case TYPES.SUSEP: {
      return { ...state, isSusepValidated: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

async function updateRemoteConfig(dispatch) {
  dispatch({ type: FIREBASE_TYPES.FETCH });
  try {
    await remoteConfig.fetchAndActivate();
    const appOn = remoteConfig.getBoolean('app_on');
    const susepCheck = remoteConfig.getBoolean('validate_susep');
    dispatch({ type: FIREBASE_TYPES.SUCCESS, payload: { appOn, susepCheck } });
  } catch (error) {
    dispatch({ type: FIREBASE_TYPES.FAILED, error });
  }
}

function getUserPermissions(dispatch) {
  const { token = null } = Cookies.getJSON(USER_ACCESS_COOKIE) || {};
  const { isSusepValidated = 'false' } = jwt(token);
  const status =
    typeof isSusepValidated === 'string' ? isSusepValidated.toLowerCase() : '';
  dispatch({ type: TYPES.SUSEP, payload: JSON.parse(status) });
}

function RemoteConfigProvider({ children }) {
  const [state, dispatch] = useReducer(RemoteConfigReducer, INITIAL_STATE);

  useEffect(() => {
    updateRemoteConfig(dispatch);
    getUserPermissions(dispatch);
  }, []);

  return (
    <RemoteConfigStateContext.Provider value={state}>
      <RemoteConfigDispatchContext.Provider value={dispatch}>
        {children}
      </RemoteConfigDispatchContext.Provider>
    </RemoteConfigStateContext.Provider>
  );
}

function useRemoteConfigState() {
  const context = useContext(RemoteConfigStateContext);
  if (context === undefined) {
    throw new Error(
      'useRemoteConfig must be used within a RemoteConfigProvider'
    );
  }
  return context;
}

function useRemoteConfigDispatch() {
  const context = useContext(RemoteConfigDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useRemoteConfigDispatch must be used within a RemoteConfigProvider'
    );
  }
  return context;
}

function useRemoteConfig() {
  return [useRemoteConfigState(), useRemoteConfigDispatch()];
}

const types = { ...TYPES, ...FIREBASE_TYPES };

export {
  RemoteConfigProvider,
  useRemoteConfig,
  useRemoteConfigState,
  useRemoteConfigDispatch,
  updateRemoteConfig,
  types
};
