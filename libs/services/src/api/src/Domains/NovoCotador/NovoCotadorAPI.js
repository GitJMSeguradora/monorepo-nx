import CoreAPI, { generateQueryString } from '../Core/CoreAPI';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["GetBrokers"] }] */
class NovoCotadorAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_API_URL));
  }

  setApi(api) {
    this.api = api;
  }

  // async GetDefaultRates(quoteId) {
  //   const result = await this.api.getInstance().get(`/quotes/defaultRate/${quoteId}`);
  //   return result;
  // }

  async GetDefaultRates(
    quoteId,
    hasAdditionalCoverageGuarantee = null,
    hasAdditionalCoverageLabor = null,
    hasAdditionalCoverageVigilance = null
  ) {
    const queryString = generateQueryString({
      quoteId,
      hasAdditionalCoverageGuarantee,
      hasAdditionalCoverageLabor,
      hasAdditionalCoverageVigilance
    });

    const result = await this.api.getInstance().get(`/quotes/defaultRate${queryString}`);

    return result;
  }

  async CalculateRate(data) {
    const result = await this.api.getInstance().post(`/quotes/calculaterate`, data);
    return result;
  }

  async Simulation(obj) {
    const result = await this.api.getInstance().post('/quotes/calculate/simulation', obj);
    return result;
  }

  async FixedpolicyHolderSearch(brokerExternalId, federalId) {
    const result = this.api.getInstance().get('/v2/policyholders', {
      params: {
        brokerExternalId,
        federalId
      }
    });
    return result;
  }

  BuscarCorretor(username) {
    const result = this.api.getInstance().get('/brokers', {
      params: {
        username
      }
    });
    return result;
  }

  async BuscarTomador(brokerExternalId, federalId) {
    const result = this.api.getInstance().get('/policyholders', {
      params: {
        brokerExternalId,
        federalId
      }
    });
    return result;
  }

  BuscarModalidades(policyholderId) {
    const result = this.api.getInstance().get('/modalities', {
      params: {
        policyholderId
      }
    });
    return result;
  }

  BuscarCotacao(quoteId) {
    const result = this.api.getInstance().get(`/quotes/${quoteId}`);
    return result;
  }

  IniciarCotacao(obj) {
    const result = this.api.getInstance().post('/quotes', obj);
    return result;
  }

  async AtualizarCotacao(quoteId, obj) {
    const result = await this.api.getInstance().post(`/quotes/${quoteId}`, obj);
    return result;
  }

  async CalcularPremio(obj) {
    const result = await this.api.getInstance().post('/quotes/calculate', obj);
    return result;
  }

  async CriarProposta(obj) {
    const result = await this.api.getInstance().post('/quotes/save-process-info', obj);
    return result;
  }

  async Emitir(obj) {
    const result = this.api.getInstance().post('/quotes/perform', obj);
    return result;
  }

  async ChangeFixedRate(data) {
    const result = await this.api.getInstance().post('/quotes/calculate/changeFixedRate', data);
    return result;
  }

  async PolicyholderSearch(page, offset, query) {
    const result = this.api
      .getInstance()
      .get(`policyholders/search?page=${page}&offset=${offset}&query=${query}`);
    return result;
  }

  async GetQuoteList(page, offset, query, status) {
    const result = this.api
      .getInstance()
      .get(`/quotes?page=${page}&offset=${offset}&query=${query}&status=${status}`);
    return result;
  }

  async GetBillList(tipoConsulta, page, offset, broker) {
    const result = this.api
      .getInstance()
      .get(
        `bill/PaginatedSearch?TipoConsulta=${tipoConsulta}&page=${page}&offset=${offset}&offset=${offset}&CPFCNPJCorretor=${broker}`
      );
    return result;
  }

  async GetPolicyholderBalanceLimit(id, modalityId) {
    const result = this.api
      .getInstance()
      .get(`/policyholders/${id}/balancelimit?modalityId=${modalityId}`);
    return result;
  }

  async GetCurrentBroker(externalId) {
    const result = this.api.getInstance().get(`/brokers/${externalId}`);
    return result;
  }

  async GetSubmodalities(policyholderId, modalityId) {
    const result = this.api
      .getInstance()
      .get(`/modalities/${modalityId}/submodalities?policyholderId=${policyholderId}`);
    return result;
  }

  async GetBill(data) {
    const result = await this.api.getInstance().get(`bill/getbills/${data.queryType}`);
    return result;
  }

  GetBillSimulate(data) {
    const result = this.api
      .getInstance()
      .get(
        `/bill/getbillSimulate/${data.federalId}/${data.identifier}/${data.tax}/${data.renewDate}`
      );
    return result;
  }

  async PostBillSimulate(data) {
    const result = await this.api.getInstance().post('/bill/postbillSimulate', data);
    return result;
  }

  async GetPolicyDownloadUrl(id) {
    const result = this.api.getInstance().get(`/quotes/${id}/print/policy`);
    return result;
  }

  async BuscarMinuta(quoteId) {
    const result = this.api.getInstance().get(`/quotes/${quoteId}/print/draftdocument`);
    return result;
  }

  async BuscarCotacaoPdf(quoteId) {
    const result = this.api.getInstance().get(`/quotes/${quoteId}/print/proposal`);
    return result;
  }

  async GetRecursalDepositInsureds() {
    const { data = [] } = await this.api
      .getInstance()
      .get(`/v2/insureds/recursal-deposit-insureds`);
    return data;
  }

  DuplicarCotacao(quoteId) {
    return this.api.getInstance().post(`/v2/quotes/${quoteId}/clone`);
  }

  async fetchBalanceLimit(PolicyHolderId, ModalityId) {
    const { data } = await this.api
      .getInstance()
      .get(
        `policyholders/${PolicyHolderId}/balancelimit-policyholder?modalityExternalId=${ModalityId}`
      );
    return data && data.Limit.LimiteDisponivel;
  }

  async performEmission(quoteId, params) {
    const { data } = await this.api.getInstance().post(`quotes/${quoteId}/perform`, params);
    return data;
  }

  async getVersion() {
    const result = await this.api.getInstance().get(`/version`);
    return result;
  }
}

const api = new NovoCotadorAPI();
export default api;
