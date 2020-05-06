import React from 'react';
import GzaAutocomplete from './GzaAutocomplete'; 
import { gzaReducer } from '../data/gzaDescription'
import { useQuery } from '@apollo/react-hooks'; 
import gql from 'graphql-tag'; 

const GZA_QUERY = gql`
{
  gzaikozan {
  	GZA_HINCD
  	HIZ_HINNM
  	HIZ_SIZEN
  	HIZ_YORYO
  	HIZ_JURKB
  	HIZ_IRISU
  	GZA_HTANK
  	GZA_ZAIKB
  	GZA_ZSHNO
  	GZA_NYKNO
  	GZA_NSKKB
  	GZA_NKYMD
  	GZA_UPYMD
  	GZA_MOTOK
  	GZA_MKING
  	GZA_GENZA
  	GZA_JUCHU
  	KAD_COPRM
  	KAD_FCTRM
  	GZA_GENCD
  	GZA_KAKCD
  	GZA_IKUCD
  	GZA_TAICD
  	GZA_KURCD
  	TGEN_GENNM
  	TKAK_GENNM
  	TIKU_IKUNM
  	TTAI_TAINM
  }
}
`;

const GzaAutocompleteByGql = ({
	value, 
	onChange, 
}) => {

  const { loading, data } = useQuery(GZA_QUERY);
  const { data: gza } = loading ? [] : gzaReducer(data.gzaikozan);
  
  return (
    <div>
      
      {loading ? (
        <div>在庫一覧を取得しています・・・</div>
      ) : (
        <GzaAutocomplete
          gza={gza}
        />
      )}
    </div>
  );
}
export default GzaAutocompleteByGql;
