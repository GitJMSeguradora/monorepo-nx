import CoreAPI from '../Core/CoreAPI';

class PolicyHolderAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_API_POLICY_HOLDER_URL));
  }

  setApi(api) {
    this.api = api;
  }

  async fetchPolicyHolderList() {
    const { data } = await this.api.getInstance().get(`policyholders/multiusuario`);
    return data;
  }

  async fetchModalities(PolicyHolderId) {
    const { data } = await this.api
      .getInstance()
      .get(`policyholders/${PolicyHolderId}/modalities-to-policyholder?isjudicial=true`);
    if (data[0]) {
      const { externalId, description, submodalities, ...rest } = data[0];

      return {
        defaultModality: {
          externalId,
          description,
          submodalities,
          ...rest
        },
        modalities: data
      };
    }
    return {};
  }

  async fetchFixedRate(PolicyHolderId, modalityId) {
    const { data } = await this.api
      .getInstance()
      .get(`policyholders/${PolicyHolderId}/modality/${modalityId}/taxa`);
    const fixedtRate = data.taxa;
    return fixedtRate;
  }

  async fetchHangs(PolicyHolderId) {
    const { data } = await this.api
      .getInstance()
      .get(`policyholders/${PolicyHolderId}/direct-emission-hangs`);
    const hangs = data;
    return hangs;
  }

  async fetchAffiliates(PolicyHolderId) {
    const { data } = await this.api
      .getInstance()
      .get(`policyholders/${PolicyHolderId}/getaffiliates`);
    const affiliates = data;
    return affiliates;
  }

  async getVersion() {
    const result = await this.api.getInstance().get(`/version`);
    return result;
  }

  async fetchPolicyHoldersAutoComplete(value) {
    return await this.api.getInstance().get(`/policyholders/autoComplete?searchParameter=${value}`);
  }

  async fetchUser(userId) {
    const segments = `/v2/users/${userId}`;
    return await this.api.getInstance().get(segments);
  }
}

const api = new PolicyHolderAPI();
export default api;
