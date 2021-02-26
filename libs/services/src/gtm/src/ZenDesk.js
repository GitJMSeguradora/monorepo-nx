import { default as GTM } from './CoreService';

class ZenDesk {
  getInstance() {
    return this.instance;
  }

  init() {
    GTM.createDataLayer({
      event: 'zenDeskChatInit'
    });
  }

  close() {
    GTM.createDataLayer({
      event: 'zenDeskChatClose'
    });
  }
}

const zenDesk = new ZenDesk();
export default zenDesk;
