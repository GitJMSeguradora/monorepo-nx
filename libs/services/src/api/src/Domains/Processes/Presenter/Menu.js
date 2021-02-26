import PoliciesAPI from '../PoliciesAPI';
import { redirectToApp, forceDownload, getDetailUrl, PROCESS_STATUS } from '@monorepo-nx/utils';

const getLabel = status => {
  if (
    [
      PROCESS_STATUS.policyCompleted.id,
      PROCESS_STATUS.quoteCanceled.id,
      PROCESS_STATUS.policyNotApproved.id,
      PROCESS_STATUS.policyDuePayment.id,
      PROCESS_STATUS.policyOverduePayment.id
    ].includes(status)
  ) {
    return 'apólice';
  }

  return 'minuta';
};

function redirectToEndorsement(documentNumber, hasEndorsement) {
  redirectToApp('endosso', 'new', { documentNumber, hasEndorsement });
}

async function getDraftLink(documentNumber) {
  const {
    data: { linkDocumento = '', linkMinuta = '' }
  } = await PoliciesAPI.GetPolicyInformation(documentNumber);

  return linkDocumento || linkMinuta;
}

async function downloadDraft(documentNumber) {
  const draftFile = await getDraftLink(documentNumber);

  return forceDownload(draftFile);
}

async function copyDraftLink(documentNumber) {
  const draft = await getDraftLink(documentNumber);
  if (draft) {
    return navigator.clipboard.writeText(draft);
  }

}

const redirectToDetail = ({ quoteStatus, documentNumber, processId }) => {
  const detailUrl = getDetailUrl({ quoteStatus, documentNumber, processId });
  window.location = detailUrl;
};

export function menuItems({ quoteStatus, documentNumber, id: processId, hasEndorsement }) {
  const menu = [];

  // Add endorsement if status includes [Vigente, A vencer, Vencida]
  [
    PROCESS_STATUS.policyCompleted.id,
    PROCESS_STATUS.policyDuePayment.id,
    PROCESS_STATUS.policyOverduePayment.id
  ].includes(quoteStatus) &&
    menu.push({
      id: 'endorsement',
      label: 'Endossar',
      action: () => redirectToEndorsement(documentNumber, hasEndorsement)
    });

  menu.push({
    id: 'see-endorsement',
    label: 'Ver Endossos',
    action: () => redirectToDetail({ quoteStatus, documentNumber, processId })
  });

  // Add endorsement if quoteStatus does not include [Em aberto, Vigente, Cotação cancelada]
  ![
    PROCESS_STATUS.quoteIncomplete.id,
    PROCESS_STATUS.quoteOpen.id,
    PROCESS_STATUS.quoteCanceled.id
  ].includes(quoteStatus) &&
    menu.push({
      id: 'draft-download',
      label: `Gerar PDF da ${getLabel(quoteStatus)}`,
      action: () => downloadDraft(documentNumber)
    });

  // Add endorsement if quoteStatus does not include [Em aberto, Vigente, Cotação cancelada]
  ![
    PROCESS_STATUS.quoteIncomplete.id,
    PROCESS_STATUS.quoteOpen.id,
    PROCESS_STATUS.quoteCanceled.id
  ].includes(quoteStatus) &&
    menu.push({
      id: 'draft-link',
      label: `Copiar link da ${getLabel(quoteStatus)}`,
      action: () => copyDraftLink(documentNumber)
    });

  // Add endorsement if quoteStatus includes [Vigente, A vencer, Vencida]
  // [3, 13, 14].includes(quoteStatus) &&
  //   menu.push({
  //     id: 'duplicate',
  //     label: 'Duplicar proposta',
  //     action: () => {}
  //   });

  return ![PROCESS_STATUS.quoteIncomplete.id, PROCESS_STATUS.quoteOpen.id].includes(quoteStatus)
    ? menu
    : null;
}

// Will be introduced in future releases

// menu.push({
//   id: 'answer-question',
//   label: 'Responder',PROCESS_STATUS.policyCompleted.id
//   action: () => {}
// })

// menu.push({
//   id: 'cancel',
//   label: 'Cancelar documento',
//   action: () => {}
// }
