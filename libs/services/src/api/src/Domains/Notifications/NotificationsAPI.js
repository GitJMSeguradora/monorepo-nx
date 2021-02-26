import CoreAPI from '../Core/CoreAPI';

class NotificationsAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_API_DASHBOARD_URL));
  }

  setApi(api) {
    this.api = api;
  }

  async getVersion() {
    const result = await this.api.getInstance().get(`/version`);
    return result;
  }
}

const api = new NotificationsAPI();
export default api;
