import React, { useState } from 'react';
import UrisakiAutocomplete from '../components/UrisakiAutocomplete'; 

export default {
  title: '売り先セレクタ', 
};

export const Autocomplete = () => {
  const [value, onChange] = useState({});
  const { data } = require('../data/urisaki2.json');

  // 得意先データのソート（AIT_AITCDの昇順）
  const arrayUrisaki2 = data.urisaki2
  arrayUrisaki2.sort(function(a, b) {
    if (a.AIT_AITCD < b.AIT_AITCD) return -1
    if (a.AIT_AITCD > b.AIT_AITCD) return 1
    return 0
  })

  return (
    <UrisakiAutocomplete 
      arrayUrisaki2={arrayUrisaki2} 
      value={value}
      onChange={onChange}
    />
  );
};