import CoreAPI from '../Core/CoreAPI';

class LambdaAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_API_LAMBDA_URL));
  }

  setApi(api) {
    this.api = api;
  }

  async getDadosReceita(cnpj) {
    const input = {
      input: cnpj
    };
    const result = await this.api.getInstance().post(`/testereceita`, input);
    return result;
  }
}

const api = new LambdaAPI();
export default api;
