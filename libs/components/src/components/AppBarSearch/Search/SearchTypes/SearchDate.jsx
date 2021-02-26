import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { TagButton } from '@monorepo-nx/components';

import * as S from './styles';

const SearchDate = ({ onChangeDate, label, value = '' }) => {
  const [openDateSelection, toggleDateSelection] = useState(true);
  const dateFormat = 'DD MMM YYYY';

  return (
    <S.Container>
      {!openDateSelection && <S.ModalDeactive />}

      {(moment(value).isValid() && (
        <TagButton
          active
          key={moment(value).format(dateFormat)}
          text={moment(value).format(dateFormat)}
          onClick={() => toggleDateSelection(true)}
          onClear={() => onChangeDate(null)}
        />
      )) || (
        <S.Button onClick={() => toggleDateSelection(true)} variant="outlined" size="medium">
          {label}
        </S.Button>
      )}

      <S.Button variant="outlined" size="medium">
        <S.SearchIcon />
      </S.Button>

      <S.DateSelection
        isOpen={openDateSelection}
        onChange={e => {
          toggleDateSelection(false);
          onChangeDate(e);
        }}
        onClose={() => toggleDateSelection(false)}
        autoValidate
      />
    </S.Container>
  );
};

SearchDate.propTypes = {
  onChangeDate: PropTypes.func,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
    PropTypes.instanceOf(Object)
  ])
};

export default SearchDate;
