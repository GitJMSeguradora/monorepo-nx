import Cookies from 'js-cookie';
import { PIN } from '@monorepo-nx/utils';

/**
 * savePin
 * Saves as a base64 encoded pin number as a cookie
 * @param {Number} pinNumber: the pin number ready to be saved
 */
export function savePin(pinNumber) {
  Cookies.set(
    PIN,
    { pin: btoa(pinNumber) },
    {
      expires: new Date(new Date().getTime() + 172800000), // 2 days from now
      domain: `${process.env.NX_REACT_APP_DOMAIN}`
    }
  );
}

/**
 * getPin
 * Gets a decoded PIN number to be used in the future requests
 */
export function getPin() {
  const { pin = null } = Cookies.getJSON(PIN) || {};

  return pin ? atob(pin) : null;
}
