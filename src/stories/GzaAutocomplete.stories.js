import React, { useState } from 'react';
import gzaikozan from '../data/gzaikozan.json';
import GzaList from '../components/GzaList';
import { gzaReducer } from '../data/gzaDescription';
import GzaListItem from '../components/GzaListItem';
import GzaAutocomplete from '../components/GzaAutocomplete'; 

export default {
  title: '在庫一覧セレクタ', 
}

const useGza = () => {
  return gzaReducer(gzaikozan.data.gzaikozan);
};

export const Autocomplete = () => {
  const [value, setValue] = useState({});
  const { data } = useGza();

  return (
    <GzaAutocomplete 
      gza={data}
      value={value}
      onChange={setValue}
    />
  );
};
  
export const List = () => {
    
  const { data } = useGza();

  return (
    <GzaList
      gza={data} 
    />
  ); 
};

export const Item = () => {
  const { data } = useGza();
  
  return (
    <GzaListItem
      itemData={data[0]}
    />
  );
};