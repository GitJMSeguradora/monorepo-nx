import CoreAPI, { generateQueryString } from '../Core/CoreAPI';
import { dataPresenter } from './Presenter';

class PoliciesAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_API_POLICIES_URL));
  }

  setApi(api) {
    this.api = api;
  }

  async saveEndorsement(request) {
    const result = await this.api.getInstance().post('/endorsements', request);
    return result;
  }

  async fetchPolicy(BrokerId, PolicyId) {
    const result = this.api
      .getInstance()
      .get(`/policies/GetPolicyDetails?BrokerId=${BrokerId}&policyId=${PolicyId}`);
    return result;
  }

  async GetBrokers(data) {
    let obj = data;

    if (obj !== null && obj !== undefined) {
      obj = obj.replace(/&/g, '%26');
    }

    return this.api.getInstance().get(`users/${obj}/type`);
  }

  BuscarCotacaoId(quoteId, BrokerId) {
    const result = this.api
      .getInstance()
      .get(`/policies/GetQuoteDetails?BrokerId=${BrokerId}&quoteId=${quoteId}`);
    return result;
  }

  BuscarApoliceId(policyId, BrokerId) {
    return this.api
      .getInstance()
      .get(`/policies/GetPolicyDetails?BrokerId=${BrokerId}&policyId=${policyId}`);
  }

  async getPolicyEndorsements(policyId) {
    const api = new CoreAPI(process.env.NX_REACT_APP_ENDORSEMENT);
    return api.getInstance().get(`Policy/detail?policyId=${policyId}`);
  }

  async GetPoliciesList(page, offset, args = {}) {
    const queryString = generateQueryString({
      pagenumber: page,
      pageSize: offset,
      ...args
    });

    const response = await this.api.getInstance().get(`/policies/all${queryString}`);

    return dataPresenter(response);
  }

  async GetPolicyHolderPoliciesList(page, offset, args = {}) {
    const queryString = generateQueryString({
      pageNumber: page,
      pageSize: offset,
      ...args
    });

    const response = await this.api.getInstance().get(`/policies/all/policyHolders${queryString}`);
    return dataPresenter(response);
  }

  GetPolicyHolderPolicyDetails(documentNumber = 0) {
    return this.api
      .getInstance()
      .get(`/Policies/policyholder/GetPolicyDetails/${documentNumber}`)
      .catch(error => error.response);
  }

  GetPolicyHolderQuoteDetails(quoteId = 0) {
    return this.api
      .getInstance()
      .get(`/Policies/policyholder/GetQuoteDetails/${quoteId}`)
      .catch(error => error.response);
  }

  async GetPolicyInformation(documentNumber) {
    return this.api.getInstance().get(`policies/print/${documentNumber}`);
  }

  async GetContactPolicy() {
    return this.api.getInstance().get(`contactpolicy`);
  }

  async DeleteContactPolicy(contactId) {
    return this.api.getInstance().delete(`contactpolicy/${contactId}`);
  }

  async GetSummary() {
    return this.api.getInstance().get('/policies/sumary');
  }

  async CanAuthorizeQuote(documentNumber) {
    return this.api.getInstance().get(`/policies/canAuthorize/${documentNumber}`);
  }

  getEmployees() {
    return this.api
      .getInstance()
      .get('/brokers/employees')
      .then(response => response.data)
      .catch(error => []);
  }

  sendMail(request) {
    this.api.getInstance().post('/endorsements/done', request);
  }

  async fetchValidityYears(modalityId, submodalityId) {
    const { data } = await this.api
      .getInstance()
      .get(`modalidade/${modalityId}/submodalidade/${submodalityId}/vigencia`);
    return data;
  }

  async createQuote(quote) {
    const { data } = await this.api.getInstance().post(`quotes/create`, quote);
    return data;
  }

  async updateQuote(quote) {
    const { data } = await this.api.getInstance().put(`quotes/update/${quote.id}`, quote);
    return data;
  }

  async saveInsured(quoteId, insuredData) {
    return this.api.getInstance().put(`quotes/${quoteId}/insured`, insuredData);
  }

  async saveProposal(quoteId) {
    const { data } = await this.api.getInstance().post(`proposal/save/${quoteId}`);
    return data.t010_ID;
  }

  async calculatePrize(quoteId, body) {
    const { data } = await this.api.getInstance().put(`quotes/${quoteId}/premium/calculate`, body);
    return data;
  }

  async FindPolicy(policyNumber) {
    return this.api
      .getInstance()
      .get(`/policies/find/${policyNumber}`)
      .catch(error => error.response);
  }

  async fetchInsured(cnpj) {
    const result = await this.api.getInstance().get(`insured?federalId=${cnpj}`);
    return result;
  }

  async fetchInsureds(params = {}) {
    const queryString = generateQueryString({ ...params });
    return this.api.getInstance().get(`insured${queryString}`);
  }

  async fetchTextObject(args = {}) {
    const queryString = generateQueryString({
      typeDocumentId: 1,
      ...args
    });

    return this.api.getInstance().get(`/proposal/textobject/${queryString}`);
  }

  GetBrokerReport() {
    return this.api
      .getInstance()
      .get('/brokers/report')
      .catch(error => error.response);
  }

  async getVersion() {
    const result = await this.api.getInstance().get(`/version`);
    return result;
  }

  async getRegisterValidationSusep() {
    const result = await this.api.getInstance().get(`/brokers/susep/check`);
    return result;
  }
}

const api = new PoliciesAPI();

export default api;
