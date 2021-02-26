import Cookies from "js-cookie";
import LogRocket from "logrocket";
import jwtDecode from "../jwtDecode/jwtDecode";
import { USER_ACCESS_COOKIE } from "../constants/constants";

const { token = null } = Cookies.getJSON(USER_ACCESS_COOKIE) || {};

export default function identifyLogRocket() {
  if (token) {
    const decodedToken = jwtDecode(token);

    const {
      UserId = null,
      isSusepValidated = null,
      name = null,
      email = null,
      loginOwnerEmail = null,
      loginOwnerId = null,
      loginOwnerUserName = null,
      role = null
    } = decodedToken;

    if (loginOwnerUserName) {
      LogRocket.identify(loginOwnerUserName, {
        name: loginOwnerUserName,
        email: loginOwnerEmail,
        id: loginOwnerId,
        role,
        corretorNome: name,
        corretorEmail: email,
        corretorSusepValidated: isSusepValidated,
        corretorId: UserId
      });
    } else {
      LogRocket.identify(name, {
        corretorNome: name,
        corretorEmail: email,
        corretorSusepValidated: isSusepValidated,
        corretorId: UserId
      });
    }
  }
}
