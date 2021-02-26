import CoreAPI from '../Core/CoreAPI';

class PainelTomadorAPI {
  constructor() {
    this.setApi('policyHolderAPI', new CoreAPI(process.env.NX_REACT_APP_API_POLICY_HOLDER_URL));
  }

  setApi(key, api) {
    this[key] = api;
  }

  /**
   * User endpoints
   */
  fetchPolicyHolderUserList(policyHolderId) {
    return this.policyHolderAPI
      .getInstance()
      .get(`Users/${policyHolderId}`)
      .then(response => {
        const { data = {} } = response;
        const usersArr = data && data.users ? data.users : [];
        return {
          ...response,
          data: {
            ...data,
            users: usersArr.map(e => ({ ...(e || {}), isLoading: false }))
          }
        };
      })
      .catch(error => error.response);
  }

  switchActivation(username, activated) {
    return this.policyHolderAPI
      .getInstance()
      .put(`Users/ActivateDeactivate/${username}`)
      .then(response => ({
        ...response,
        data: {
          ...response.data,
          message:
            response.data.message ||
            `Usuário ${username} ${activated ? 'ativado' : 'desativado'} com sucesso!`
        }
      }))
      .catch(error => error.response);
  }

  createUser(user) {
    const data = {
      Email: user.email,
      FederalId: String(user.cnpj).replace(/\D/g, ''),
      Phone: String(user.telefone).replace(/\D/g, ''),
      Contact: user.nome,
      SuggestedLogin: user.login
    };

    return this.policyHolderAPI
      .getInstance()
      .post(`Users`, data)
      .then(response => ({
        ...response,
        data: {
          ...response.data,
          message:
            response.data.success && !response.data.message
              ? `Usuário ${user.login} criado com sucesso!`
              : response.data.message
        }
      }))
      .catch(error => ({
        data: { success: false, message: `Não foi possível criar o usuário ${user.login}.` }
      }));
  }

  linkUser(policyHolderId, login) {
    return this.policyHolderAPI
      .getInstance()
      .post(`Users/relate/${login}`, { PolicyholderId: policyHolderId })
      .catch(error => ({
        data: { success: false, message: `Erro ao vincular usuário ${login}.` }
      }));
  }

  checkUserLogin(policyHolderId, login) {
    return this.policyHolderAPI
      .getInstance()
      .get(`Users/canSaveExistingUser/${login}/${policyHolderId}`)
      .catch(error => ({
        data: { success: false, message: `Ocorreu um erro ao vincular o usuário ${login}.` }
      }));
  }

  /**
   * Fatura endpoints
   */
  switchEmailFatura(email, enabled) {
    const data = {
      Id: email.id,
      PolicyHolderId: email.policyHolderId,
      Name: email.name,
      Email: email.email,
      Active: enabled
    };

    return this.postEmailFatura(data);
  }

  addEmailFatura(email) {
    const data = {
      Id: 0,
      PolicyHolderId: email.policyHolderId,
      Name: email.name,
      Email: email.email,
      Active: true
    };

    return this.postEmailFatura(data);
  }

  postEmailFatura(data) {
    return this.policyHolderAPI
      .getInstance()
      .post(`TakerBills/email`, data)
      .then(response => {
        const { data = { data: {} } } = response;
        return {
          ...response,
          data: {
            ...data.data,
            emails: data.data.emails || [],
            success: data.success
          }
        };
      })
      .catch(error => ({
        data: { success: false, message: `Não foi possível alterar o email ${data.email}.` }
      }));
  }

  switchBillActivation(bill, enabled) {
    const data = {
      PolicyHolderId: bill.policyHolderId,
      ClosingReferenceDay: bill.closingReferenceDay || 1,
      BillDueDays: bill.billDueDays || 1,
      UseBill: enabled
    };

    return this.postUseBill(data);
  }

  setParams(bill) {
    const data = {
      PolicyHolderId: bill.policyHolderId,
      ClosingReferenceDay: bill.closingReferenceDay || 1,
      BillDueDays: bill.billDueDays || 1,
      UseBill: true
    };

    return this.postUseBill(data);
  }

  postUseBill(body) {
    return this.policyHolderAPI
      .getInstance()
      .post(`TakerBills/params`, body)
      .then(response => {
        const { data } = response;
        return {
          ...response,
          data: {
            ...data.data,
            message: data.message,
            success: data.success
          }
        };
      })
      .catch(error => ({
        data: { success: false, message: `Não foi realizar esta operação.` }
      }));
  }

  getTakerBillsParams(policyHolderId) {
    return this.policyHolderAPI
      .getInstance()
      .get(`TakerBills/params/${policyHolderId}`)
      .then(response => {
        const { data = { data: {} } } = response;
        return {
          ...response,
          data: {
            ...data.data,
            emails: data.data.emails || [],
            success: data.success
          }
        };
      })
      .catch(error => ({
        data: { success: false, message: `Ocorreu um erro ao buscar parâmetros da fatura.` }
      }));
  }
}

const api = new PainelTomadorAPI();
export default api;
