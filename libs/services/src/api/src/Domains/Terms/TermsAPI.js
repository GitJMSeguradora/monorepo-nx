import CoreAPI from '../Core/CoreAPI';
import { PLATFORM_ID } from "../../Contants";

class TermsAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_TERMS));
  }

  setApi(api) {
    this.api = api;
  }

  async getAcceptanceTerm (userID, descriptionTerm) {
    const descriptions = descriptionTerm ? `&description=${descriptionTerm}` : '';
    const url = `v1/Users/terms/unsigned?origin=${PLATFORM_ID}&externalId=${userID}${descriptions}`;
    const result = await this.api.getInstance().get(url);
    return result;
  }

  async setAcceptanceTerm (term, userId) {
    const data = {
      "origin": PLATFORM_ID,
      "externalId": userId
    }

    const result = await this.api.getInstance().post(`v1/terms/${term}/accept`, data);
    return result;
  }
};

const api = new TermsAPI();
export default api;
