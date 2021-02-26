import CoreAPI from '../Core/CoreAPI';

class AuthAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_IDENTITY_SERVER));
  }

  setApi(api) {
    this.api = api;
  }

  async getRestrictionAccessByGV () {
    let result;

    try {
      result = await this.api.getInstance().get(`api/account/v1/broker/verify-block`);
      result = result.data;
    } catch (e) {
      result = true;
    }

    return result;
  }
};

const api = new AuthAPI();
export default api;
