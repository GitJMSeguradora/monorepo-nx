import CoreAPI from '../Core/CoreAPI';

class RepositoryAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_REPOSITORY));
  }

  setApi(api) {
    this.api = api;
  }

  async getOptionList() {
    const result = await this.api.getInstance().get('/endorsements/types');
    return result;
  }

  async getModality(modalityId) {
    const result = await this.api.getInstance().get(`/modalities/${modalityId}/submodalities`);
    return result.data;
  }

  async BuscarTomadorAutocomplete(page, offset, searchTerm) {
    const result = this.api.getInstance().get(`/policyholders/search?q=${searchTerm}`);
    return result;
  }

  async AddAddressOnInsured(obj) {
    const result = this.api.getInstance().post('/Insureds/addresses', obj);
    return result;
  }

  async GetBillPaginatedSearch(data) {
    let www = `/bills?PageNumber=${data.activePage}&PageSize=${data.itemsCountPerPage}`;

    if (data.filters) {
      www += RepositoryAPI.addFiltersToUrl(data.filters);
    }

    if (data.documentNumber) {
      const formatted = data.documentNumber.replace(/^(\d{2})(\d{4})(\d{7}).*/, '$1-$2-$3');

      www += `&documentNumber=${formatted}`;
    }

    const result = await this.api.getInstance().get(www);
    return result;
  }

  static addFiltersToUrl(filters) {
    let sufix = '';
    if (filters.policyholder) sufix += `&PoliceholderId=${filters.policyholder}`;

    if (filters.startDate) sufix += `&DateStart=${filters.startDate}`;

    if (filters.endDate) {
      sufix += `&DateEnd=${filters.endDate}`;
    } else if (filters.startDate) {
      sufix += `&DateEnd=${filters.startDate}`;
    }

    const dueDateUrl = {
      a_vencer: '&OnlyBeforeDueDate=true',
      vencido: '&OnlyAfterDueDate=true',
      pago: '&OnlyPaid=true'
    };
    sufix += dueDateUrl[filters.status] || '';
    return sufix;
  }

  async GetBillAdditionalInformations(data) {
    const www = `/bills/details?FederalId=${data.FederalId}&IdDocument=${data.IdDocument}`;
    const result = await this.api.getInstance().get(www);
    return result;
  }

  async getVersion() {
    const result = await this.api.getInstance().get(`/version`);
    return result;
  }
}

const api = new RepositoryAPI();
export default api;
