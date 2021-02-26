import React, { useState } from 'react';
import { SearchInput, SearchSelect, SearchDate } from './SearchTypes';
import { FilterSelect } from './FilterSelect';
import { selectCustomFilter } from './policyholderCustomFilter';
import { SearchIcon } from '../styles';

function Search(props) {
  const searchOptions = [
    {
      value: 1,
      type: 'input',
      label: 'Processos',
      placeholder: 'Buscar por nº da apólice/endosso ou da proposta',
      items: [],
      isSearchable: false
    },
    {
      value: 2,
      type: 'select',
      label: 'Tomador',
      placeholder: 'Buscar por CNPJ ou razão social do tomador',
      items: [],
      isSearchable: true,
      onInputChange: props.onSelectInputChange,
      filter: selectCustomFilter,
      icon: 'search'
    },
    {
      value: 3,
      type: 'select',
      label: 'Status',
      placeholder: 'Selecione o status do processo',
      items: [
        { value: 2, label: 'Apólice vigente' },
        { value: 5, label: 'A vencer' },
        { value: 3, label: 'Cancelado' },
        { value: 1, label: 'Em aberto' },
        { value: 4, label: 'Em análise' }
      ],
      isSearchable: false,
      filter: null
    },
    {
      value: 4,
      type: 'datepicker',
      label: 'Data',
      placeholder: 'Selecione a data ou período',
      items: [],
      isSearchable: false
    }
  ];
  const [searchType, setSeachType] = useState(
    props.options || searchOptions.find(option => option !== undefined)
  );

  const selectOptions =
    props.customOptions && props.customOptions.length > 0 ? props.customOptions : searchType.items;

  const searchTypeComponent = {
    input: (
      <SearchInput
        withfilter={props.showFilter}
        label={searchType.placeholder}
        classes={{
          container: 'search-container',
          label: 'search-label',
          icon: 'search-icon',
          input: 'search-input'
        }}
        onChange={props.onChange}
        onSearch={props.onSearch}
        value={props.value}
      />
    ),
    // ...(searchType.icon === 'search' {DropdownIndicator: () => <SearchIcon />} )
    select: (
      <SearchSelect
        components={searchType.icon === 'search' && { DropdownIndicator: () => <SearchIcon /> }}
        isSearchable={searchType.isSearchable}
        label={searchType.placeholder}
        placeholder={searchType.placeholder}
        options={selectOptions}
        onInputChange={searchType.onInputChange}
        onChange={props.onSelect}
        isLoading={props.isLoadingOptions}
        loadingMessage={() => 'Carregando...'}
        value={props.value}
        autoComplete
        blurInputOnSelect
        filterOption={searchType.filter}
      />
    ),

    datepicker: (
      <SearchDate
        label={searchType.placeholder}
        onChangeDate={props.onSearchByDate}
        value={props.value}
      />
    )
  };

  return (
    <>
      {props.showFilter && (
        <FilterSelect
          options={searchOptions}
          onChange={type => {
            setSeachType(type);
            props.filterChangeCallback();
          }}
        />
      )}

      {searchTypeComponent[searchType.type]}
    </>
  );
}

Search.propTypes = {};

export default Search;
