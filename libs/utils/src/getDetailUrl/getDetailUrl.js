import { PROCESS_STATUS } from '../constants/constants';

export function getDetailUrl({ quoteStatus, documentNumber, processId }) {
  const quoteStatusObject = Object.values(PROCESS_STATUS).find(qs => qs.id === quoteStatus);
  const id = quoteStatusObject && quoteStatusObject.type === 'quote' ? processId : documentNumber;

  return `/details/${quoteStatusObject.type}/${id}`;
}
