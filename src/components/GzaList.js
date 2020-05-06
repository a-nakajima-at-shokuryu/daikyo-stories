import React from 'react';
import { VariableSizeList } from 'react-window'; 
import {
  List, 
} from '@material-ui/core'; 
import GzaListItem from './GzaListItem';

const itemSize = index => 80;

const GzaList = ({
  width = 800, 
  height = 500, 
  gza, 
  optionProps, 
}) => {
  const data = gza;
  const itemCount = data.length;
  return (
    <VariableSizeList
      width={width}
      height={height}
      itemCount={itemCount}
      itemSize={itemSize}
      outerElementType={List}
    >
      {({ index, style }) => (
        <GzaListItem
          style={style}
          itemData={gza[index]}
          {...optionProps}
        />
      )}
    </VariableSizeList>
  );
}

export default GzaList
