import TagManager from 'react-gtm-module';

class CoreService {
  getInstance() {
    return this.instance;
  }

  triggerPageView = (pathname, userId) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageview',
        pagina: pathname,
        userId
      }
    });
  };

  createDataLayer = dataLayer => {
    TagManager.dataLayer({
      dataLayer
    });
  };

  createGlobalDataLayer = (name, data) => {
    if (window[name]) {
      window[name] = { ...window[name], ...data };
      return;
    }

    window[name] = data;
  };
}

const services = new CoreService();
export default services;
