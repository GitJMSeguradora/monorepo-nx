import { PROCESS_STATUS } from "@monorepo-nx/utils";
import { menuItems } from "./Menu";
import { processNumber } from "./ProcessNumber";
import { actionLabel } from "./ActionLabel";

function buildData(item) {
  // Data to List
  const { processId, label: processLabel } = processNumber(item);
  const processStatusArray = Object.values(PROCESS_STATUS);

  return {
    customerControlIdentifies: item.customerControlIdentifies,
    description: item.description,
    documentNumber: item.documentNumber,
    hasEndorsement: item.hasEndorsement,
    typeEndorsement: item.typeEndorsement,
    endorsementStatusMessage: "",
    hasPolicyInProgress: item.hasPolicyInProgress,
    id: item.id,
    idExternoModalidade: item.idExternoModalidade,
    idExternoSubmodalidade: item.idExternoSubmodalidade,
    insuredName: item.insuredName,
    isExpress: item.isExpress,
    judicialCircuitCity: item.judicialCircuitCity,
    judicialCircuitNumber: item.judicialCircuitNumber,
    judicialProcessNumber: item.judicialProcessNumber,
    modalityId: !!item.modalityId ? item.modalityId : item.idExternoModalidade,
    name: item.name,
    policyholderId: item.policyholderId,
    proposalId: item.proposalId,
    quoteStatus: processStatusArray.find(
      (stat) => stat.id === item.quoteStatus
    ),
    securedAmount: item.securedAmount,
    actionLabel: actionLabel(item.quoteStatus),
    menu: menuItems(item),
    processId,
    processLabel,
  };
}

export function dataPresenter({ data, status }) {
  const filteredRecords =
    (data &&
      data.records &&
      data.records.length &&
      data.records.filter((item) => item.quoteStatus !== 0)) ||
    [];
  const records =
    (filteredRecords.length &&
      filteredRecords.map((item) => buildData(item))) ||
    [];

  return {
    status,
    data: {
      numberOfRecords: data.numberOfRecords,
      hasMore: data.hasMore,
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      records,
    },
  };
}
