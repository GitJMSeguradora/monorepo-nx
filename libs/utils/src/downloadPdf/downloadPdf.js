// services
import { GTMServices } from "@monorepo-nx/services/gtm";

const downloadPdf = (url, eventName) => {
  eventName && GTMServices.createDataLayer({ event: eventName });

  const anchorElement = document.createElement("a");
  anchorElement.href = url;
  anchorElement.target = "_blank";
  anchorElement.download = url;
  anchorElement.click();
};

export default downloadPdf;
