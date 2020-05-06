import React from 'react';
import { useQuery } from '@apollo/react-hooks'; 
import gql from 'graphql-tag'; 
import UrisakiAutocomplete from './UrisakiAutocomplete';

const URISAKI_QUERY = gql`
query {
  urisaki2 {
    AIT_AITCD
    AIT_MEISJ
    AIT_SEISJ
  }
}
`;

const UrisakiAutocompleteByGql = ({
  value, 
  onChange, 
}) => {
  const { loading, data } = useQuery(URISAKI_QUERY);
  // 得意先データのソート（AIT_AITCDの昇順）
  const arrayUrisaki2 = loading ? [] : data.urisaki2;
  arrayUrisaki2.sort(function(a, b) {
    if (a.AIT_AITCD < b.AIT_AITCD) return -1
    if (a.AIT_AITCD > b.AIT_AITCD) return 1
    return 0
  })
  return (
    <div>
      {loading ? (
        <div>売り先一覧を取得しています・・・</div>
      ) : (
        <UrisakiAutocomplete arrayUrisaki2={arrayUrisaki2} />
      )}
    </div>
  )
}

export default UrisakiAutocompleteByGql
