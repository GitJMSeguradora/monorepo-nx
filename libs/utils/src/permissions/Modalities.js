import { getAuth, getPermissions} from '@monorepo-nx/services/auth';

// This object is all modalities permissions possibles for any user type
export const ALL_MODALITIES_PERMISSIONS = [
  // EPS
  {
    desc: 'permission.policyholder.modality.performance.bond.services.provider',
    id: 97
  },
  // Jud. Cívil
  { desc: 'permission.policyholder.modality.judicial.civil', id: 76 },
  // Adiantamento Pagamento
  { desc: 'permission.policyholder.modality.advance.payment', id: 73 },
  // Adiantamento Trabalhista
  {
    desc: 'permission.policyholder.modality.judicial.labor',
    id: 122,
    submodalities: [
      { id: 1, desc: 'Simples' },
      { id: 53, desc: 'Substituição Trabalhista' }
    ]
  },
  // Jud. Recursal
  {
    desc: 'permission.policyholder.modality.judicial.appeal',
    id: 122,
    submodalities: [
      { id: 31, desc: 'Embargos no TST' },
      { id: 32, desc: 'Recurso Ordinário' },
      { id: 33, desc: 'Recurso Extraordinário' },
      { id: 34, desc: 'Recurso de Revista' },
      { id: 35, desc: 'Agravo de Instrumento' },
      { id: 52, desc: 'Substituição Recursal' }
    ]
  }
];

export const identifyModalitiesByID = (modalityId, subModalityId) => {
  let modality = {id: '', desc: ''};
  let filterModalities = ALL_MODALITIES_PERMISSIONS.filter(e => e.id === modalityId);

  if (filterModalities.length !== 0) {
    if (filterModalities.length >= 2) {
      filterModalities.map(mod => { // eslint-disable-line
        const submodality = mod.submodalities.find(e => e.id === subModalityId) || false;

        if (submodality) {
          modality = {
            id: mod.id,
            desc: mod.desc,
            submodality
          }
        }
      })
    } else {
      modality = filterModalities[0];
    }
  }

  return modality;
}

export const userModalities = async (alive = false) => {
  let modalities = [];

  if (alive) {
    const access = await getPermissions();
    modalities = access.modalities;
  } else {
    const auth = getAuth();

    if (auth && auth.modalities) {
      modalities = auth.modalities;
    } else {
      modalities = await userModalities(true);
    }
  }

  // modalities = [
  //   "permission.policyholder.modality.performance.bond.services.provider",
  // "permission.policyholder.modality.judicial.civil",
  // "permission.policyholder.modality.advance.payment",
  // "permission.policyholder.modality.judicial.labor",
  // "permission.policyholder.modality.judicial.appeal"
  // ];

  return modalities;
};

export const hasModalityPermission = async (modalityId, subModalityId, alive = false) => {
  const modality = identifyModalitiesByID(modalityId, subModalityId);
  const userModalitiesLocal = await userModalities(alive);
  let hasPermission = false;

  hasPermission = userModalitiesLocal.filter(e => e === modality.desc).length === 1;

  return hasPermission;
};
