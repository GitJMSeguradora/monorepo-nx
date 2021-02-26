export function processNumber({ policyNumber, documentNumber, id: quoteId }) {
  const processType =
    (policyNumber && 'policyNumber') ||
    (documentNumber && 'documentNumber') ||
    (quoteId && 'quoteId');

  switch (processType) {
    case 'policyNumber':
      return {
        processId: policyNumber,
        label: 'Apólice'
      };

    case 'documentNumber':
      return {
        processId: documentNumber,
        label: 'Nº da proposta'
      };

    case 'quoteId':
    default:
      return {
        processId: quoteId,
        label: 'Cotação'
      };
  }
}
