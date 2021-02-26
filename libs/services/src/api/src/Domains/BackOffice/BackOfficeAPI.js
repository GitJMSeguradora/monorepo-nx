import CoreAPI from '../Core/CoreAPI';

class BackOfficeAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_API_BACKOFFICE));
  }

  setApi(api) {
    this.api = api;
  }

  async TreatDocuments(issueMessage) {
    return this.api.getInstance().post(`/document/treatdocuments`, {
      issueMessage
    });
  }

  async treatOptionalFlows(issueMessage) {
    return this.api.getInstance().post(`/optionalflow/treatoptionalflows`, {
      issueMessage
    });
  }

  async hasOpenedQuestion(documentNumber) {
    return this.api.getInstance().get(`/question/verifyforunfinished/${documentNumber}`);
  }
}

const api = new BackOfficeAPI();
export default api;
