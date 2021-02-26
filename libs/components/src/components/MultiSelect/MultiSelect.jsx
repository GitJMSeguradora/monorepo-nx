import React, { useState, useEffect } from 'react';

import * as S from './MultiSelectStyles';

const INITIAL_STATE = {
  tagList: [],
  list: [],
  selected: null
};

const MultiSelect = ({
  className,
  options,
  onChange,
  removeFromSelect = false,
  label = 'Selecione o tomador',
  selectAll = false,
  selectAllLabel,
  ...rest
}) => {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    setState(prevState => ({ ...prevState, list: options }));
  }, [options]);

  const ALL_OPTION = { label: selectAllLabel, value: 'all' };
  const renderTagList = () =>
    state.tagList.map(item => (
      <S.TagButton
        active
        key={item.value}
        text={item.label}
        onClick={e => onRemoveSelectedItem(item)}
        onClear={e => onRemoveSelectedItem(item)}
      />
    ));

  const handleRemoveItem = selected => {
    if (removeFromSelect) {
      return state.list.filter(item => item.value !== selected.value);
    }

    return state.list;
  };

  const handleRemoveItemTagList = tagItem => {
    const newList = state.tagList.filter(item => item.value !== tagItem.value);
    newList.length < 1 && setState(prevState => ({ ...prevState, selected: null }));
    return newList;
  };

  const onRemoveSelectedItem = item => {
    const tagList = handleRemoveItemTagList(item);

    setState(prevState => ({
      ...prevState,
      tagList
    }));

    onChange(tagList);
  };

  const handleRemoveDuplicates = list => {
    return [...new Set(list)];
  };

  const handleAddItem = item => {
    setState(prevState => ({
      ...prevState,
      selected: item,
      list: handleRemoveItem(item),
      tagList: handleRemoveDuplicates([...state.tagList, item])
    }));
  };

  const handleSelectAll = () => {
    setState(prevState => ({
      ...prevState,
      selected: ALL_OPTION,
      tagList: INITIAL_STATE.tagList
    }));

    onChange([ALL_OPTION]);
  };

  const handleOnChangeSelect = (selected, { action }) => {
    if (action === 'create-option') {
      return handleSelectAll();
    }

    handleAddItem(selected);
    onChange([...state.tagList, selected]);
  };

  return (
    <S.Container className={className}>
      <S.Select
        label={label}
        value={state.selected}
        options={handleRemoveDuplicates(state.list)}
        onChange={handleOnChangeSelect}
        isValidNewOption={() => selectAll}
        formatCreateLabel={() => (
          <S.FixedItem>
            <S.FixedItemText>{selectAllLabel}</S.FixedItemText>
          </S.FixedItem>
        )}
        createOptionPosition="first"
        {...rest}
      />
      <S.TagsContainer>{renderTagList()}</S.TagsContainer>
    </S.Container>
  );
};

export default MultiSelect;
