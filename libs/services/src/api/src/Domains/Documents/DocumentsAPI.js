import CoreAPI from '../Core/CoreAPI';

class DocumentsAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_API_DOCUMENTS_URL));
  }

  setApi(api) {
    this.api = api;
  }

  async GetDocuments(quoteId) {
    const result = await this.api.getInstance().get(`/files/v2/quote/${quoteId}/`);
    return result;
  }

  async GetDocumentsUserType(quoteId, userType) {
    const result = await this.api
      .getInstance()
      .get(
        `files/list-policyholder-documents/quote/${quoteId}/sendMail/false/userType/${userType}`
      );
    return result;
  }

  async DeleteDocuments(quoteId, fileName) {
    const result = await this.api
      .getInstance()
      .delete(`/files/quote/${quoteId}/filename/${fileName}`);
    return result;
  }

  async getVersion() {
    const result = await this.api.getInstance().get(`/version`);
    return result;
  }
}

const api = new DocumentsAPI();
export default api;
