import CoreAPI from '../Core/CoreAPI';

class FirebaseAuthAPI {
  constructor() {
    console.log(process.env)
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_IDENTITY_SERVER));
  }

  setApi(api) {
    this.api = api;
  }

  async postAutentication() {
    const result = await this.api.getInstance().post('/api/Account/v1/firebase/token');

    return result;
  }
}

const api = new FirebaseAuthAPI();
export default api;
