import CoreAPI from '../Core/CoreAPI';

class DashboardAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_API_DASHBOARD_URL));
  }

  setApi(api) {
    this.api = api;
  }

  async GetDashboardPoliciesInfo(data) {
    const result = await this.api.getInstance().get(`/TotalPolicyPremium?pagesize=24&pagenumber=1`);
    return result;
  }

  async GetDashboardComissionInfo(data) {
    const result = await this.api.getInstance().get(`/PaidCommissions?pagesize=24&pagenumber=1`);
    return result;
  }

  async GetTopPolicyHolders(data) {
    const result = await this.api.getInstance().get(`/PolicyHolders?pagesize=5&pagenumber=1`);
    return result;
  }

  async ResetPin() {
    const result = this.api.getInstance().get('/Pin/ResetPin');
    return result;
  }

  async AuthPIN(data) {
    const result = this.api.getInstance().get(`/Pin/VerifyPin?pin=${data}`);
    return result;
  }

  async getVersion() {
    const result = await this.api.getInstance().get(`/version`);
    return result;
  }
}

const api = new DashboardAPI();
export default api;
