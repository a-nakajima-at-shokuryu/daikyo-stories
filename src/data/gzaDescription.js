export const gzaDescription = [
  ['GZA_HINCD', 'hincd', '品種CD', 'コード　品種', ], 
  ['HIZ_HINNM', 'hinnm', '品名', '品名', ], 
  ['HIZ_SIZEN', 'sizen', 'サイズ', 'サイズ', ], 
  ['HIZ_YORYO', 'yoryo', '容量', '容量', ], 
  ['HIZ_JURKB', 'jurkb', '（Ｇ・Ｐ）', '区分　重量（Ｇ・Ｐ）', ], 
  ['HIZ_IRISU', 'irisu', '入数', '入数', ], 
  ['GZA_HTANK', 'htank', '平均単価', '平均単価', ], 
  ['GZA_ZAIKB', 'zaikb', '在庫種別', '区分　在庫種別', ], 
  ['GZA_ZSHNO', 'zshno', '在庫処理NO', '在庫処理NO', ], 
  ['GZA_NYKNO', 'nykno', '入庫NO（証券NO）', '入庫NO（証券NO）', ], 
  ['GZA_NSKKB', 'nskkb', '棚NO', '区分　入出庫 （# 棚No?）', ], 
  ['GZA_NKYMD', 'nkymd', '入庫年月日', '日付　入庫年月日', ], 
  ['GZA_UPYMD', 'upymd', '最終更新年月日', '日付　最終更新年月日', ], 
  ['GZA_MOTOK', 'motok', '元個数（枚数）', '数量　元個数（枚数）', ], 
  ['GZA_MKING', 'mking', '元個数', '金額　元個数', ], 
  ['GZA_GENZA', 'genza', '残数（枚数）', '残数　現在庫（枚数）', ], 
  ['GZA_JUCHU', 'juchu', '受注数（枚数）', '確定前受注数（枚数）', ], 
  ['KAD_COPRM', 'coprm', '倉庫略称', '（冷蔵庫）会社名　略式名称', ], 
  ['KAD_FCTRM', 'fctrm', '倉庫工場略称', '（冷蔵庫）工場名　略式名称', ], 
  ['GZA_GENCD', 'gencd', '原産地コード', '原産地コード', ], 
  ['GZA_KAKCD', 'kakcd', '加工地コード', '加工地コード', ], 
  ['GZA_IKUCD', 'ikucd', '育成コード', '育成コード', ], 
  ['GZA_TAICD', 'taicd', '態様コード', '態様コード', ], 
  ['GZA_KURCD', 'kurcd', '倉コード', '倉コード', ], 
  ['TGEN_GENNM', 'gennm', '原産地', '（原産地）短縮名　摘要', ], 
  ['TKAK_GENNM', 'kaknm', '加工地', '（加工地）短縮名　摘要', ], 
  ['TIKU_IKUNM', 'ikunm', '育成', '（育成）短縮名　摘要', ], 
  ['TTAI_TAINM', 'tainm', '様態', '（様態）短縮名　摘要', ], 
].reduce((a, [full, name, title, description]) => {
  a[full] = { full, name, title, description };
  return a;
}, {});

export const gzaReducer = gza => {
  const columns = gzaDescription;
  const data = gza.map(row => {
    return Object.entries(row,).map(([full, value]) => {
      const { name } = columns[full] || {};
      return [name, value]
    }).reduce((row, [name, value]) => {
      row[name] = value;
      return row;
    }, {});
  });
  return {
    columns, 
    data, 
  };
};
