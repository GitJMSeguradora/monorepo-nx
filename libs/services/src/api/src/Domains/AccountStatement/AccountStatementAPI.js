import CoreAPI from "../Core/CoreAPI";
import { getPin } from "../../../../pin";

class AccountStatementAPI {
  constructor() {
    this.setApi(new CoreAPI(process.env.NX_REACT_APP_API_ACCOUNT_STATEMENT));
  }

  setApi(api) {
    this.api = api;
  }

  /**
   * validatePin();
   * Used to validate a PIN number.
   *
   * @param {number} pin the PIN number to be validated
   * @example validatePin(123456)
   */
  async validatePin(pin) {
    const result = this.api.getInstance().get(`v1/user/pin/${pin}`);
    return result;
  }

  /**
   * recoverPin()
   * Used to recover the PIN number for the current logged user. The PIN will
   * be sent to the email related to the user's account.
   */
  async recoverPin() {
    const result = this.api.getInstance().get(`v1/user/pin/recover`);
    return result;
  }

  async getReport(type, params, format) {
    const config = {
      headers: {
        Accept: format === 'txt' ? "application/txt" :"application/pdf",
        Pin: getPin()
      },
      params,
      responseType: "arraybuffer"
    };

    const result = this.api.getInstance().get(`v1/report/${type}`, config);
    return result;
  }

  /**
   * @description Get the broker's production for the whole period, or you can request for
   * a specific year and bimester.
   *
   * @param {number} year  - the year of the desired report
   * @param {number} bimester  - the bimester number of the desired report
   * @example getProduction(2020, 2);
   */
  async getProduction(year, bimester) {
    const result = this.api.getInstance().get(`v1/Production/broker/`, {
      params: { year, bimester }
    });

    return result;
  }

  /**
   * @description Get the account statement report with the broker's incentive
   * program participation.
   *
   * @param {number} year  - the year of the desired report
   * @example getStatement(year)
   */
  async getStatement(year) {
    const result = this.api.getInstance().get(`v1/incentive/${year}/statement`);
    return result;
  }

  /**
   * @description Check the broker's eligibility to the bonus climbing program.
   *
   * @param {number} year  - the year of the desired report
   * @example checkEligibility(year)
   */
  async checkEligibility(year) {
    const result = this.api
      .getInstance()
      .get(`v1/incentive/${year}/participant`);
    return result;
  }
}

const api = new AccountStatementAPI();
export default api;
