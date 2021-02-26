import CoreAPI from '../Core/CoreAPI';

class IdentityServerAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_IDENTITY_SERVER));
  }

  setApi(api) {
    this.api = api;
  }

  ValidarUsuarioSenha(username, password) {
    const data = {
      Login: username,
      Password: password
    };

    const result = this.api.getInstance('application/x-www-form-urlencoded').post(`api/account/v1/login`, data);
    return result;
  }

  ValidarUsuarioSenhaBackoffice(username, password) {

    const data = {
      username,
      password,
      grant_type: 'password',
      Scope: 'backoffice users',
      client_id: 'PlataformaBackoffice',
      client_secret: 'appSecretPlataformaApi'
    };

    const result = this.api.getInstance('application/x-www-form-urlencoded').post(`connect/token`, data);
    return result;
  }

  ValidarLogarComo(username, superUserAccessToken) {

    const result = this.api
      .getInstance('application/x-www-form-urlencoded')
      .post(
        `api/account/v1/login/as`,
        { login: username },
        { headers: { Authorization: `Bearer ${superUserAccessToken}` } }
      );
    return result;
  }

  RefreshToken() {
    const result = this.api.getInstance().post(`api/account/v1/login/refresh`);
    return result;
  }

  async getVersion() {
    const result = await this.api.getInstance().get(`/version`);
    return result;
  }
}

const api = new IdentityServerAPI();
export default api;
