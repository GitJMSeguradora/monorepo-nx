import React from 'react';

import * as S from './styles';

function FilterSelect({ onChange, options }) {
  return (
    <S.Container>
      <S.Select
        label={null}
        isSearchable={false}
        placeholder="Selecione um filtro para a busca"
        options={options}
        defaultValue={options.find(option => option !== undefined)}
        onChange={onChange}
      />
    </S.Container>
  );
}

FilterSelect.propTypes = {};

export default FilterSelect;
