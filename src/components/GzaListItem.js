import React from 'react';
import { 
  ListItem, 
  ListItemAvatar, 
  ListItemText,
  Avatar,
  Typography,
  Chip,
  Tooltip,
  Paper,
  IconButton,
} from '@material-ui/core';
import Suryo from './GzaListItemSuryo'; 

const num = s => Number(s).toLocaleString();

const GzaListItem = ({
  itemData, 
  ...other 
}) => {
  const {
    hincd, 
    hinnm, 
    sizen, 
    yoryo, 
    jurkb, 
    htank, 
    zshno, 
    nkymd, 
    upymd, 
    kurcd, 
    coprm, 
    fctrm, 
    gennm, 
    kaknm, 
    ikunm, 
    tainm, 
    genza, 
    juchu, 
  } = itemData;

  const avatar = <img width={50} src={`/img/hincd_${hincd}.jpg`} />;

  return (
    <ListItem 
      divider
      button
      {...other}
    >
      <ListItemAvatar>
        <IconButton>
          <Avatar>
            {avatar}
          </Avatar>
        </IconButton>
      </ListItemAvatar>
      <ListItemText 
        primary={
          <React.Fragment>
            <Hinmei
              tooltip={
                <div>
                  {hincd} {hinnm} {sizen} {num(yoryo)}{jurkb}
                </div>
              }
            >
              {hinnm}
            </Hinmei>
            {' '}
            <Kikaku>
              {sizen} | {num(yoryo)}{jurkb}
            </Kikaku>
            {' '}
            <Sanchi tags={{ gennm, kaknm, ikunm, tainm }}/>
            {' '}
            <Hincd>{hincd}</Hincd>
          </React.Fragment>  
        }
        secondary={
          <React.Fragment>
            <Zcode>{zshno}</Zcode>
            {' '}
            <Tanka>@ {num(htank)}</Tanka>
            {' '}
            <Kura code={kurcd}>{coprm} {fctrm}</Kura>
            {' '}
            <Ymd ymd={{ nkymd, upymd }}/>

            <br/>
            <Suryo 
              genza={genza}
              juchu={juchu}
            />
          </React.Fragment>
        } 
      />
      
    </ListItem>
  )
}

export default GzaListItem

// 部品
const Hinmei = ({
  tooltip, 
  children, 
}) => {
  return (
    <Tooltip title={tooltip}>
      <Typography component="span">
        {children}
      </Typography>
    </Tooltip>
  );
};
const Zcode = ({
  children, 
}) => {
  return (
    <Tooltip title="在庫処理NO">
      <Typography component="span" variant="body2">
        {children}
      </Typography>
    </Tooltip>
  );
};
const Kikaku = ({
  children, 
}) => {
  return (
    <Tooltip title="サイズ | 容量">
      <Typography component="span" variant="subtitle2">
        {children}
      </Typography>
    </Tooltip>
  );
};
const Tanka = ({
  children, 
}) => {
  return (
    <Tooltip title="単価">
      <Chip component="span" label={children} size="small" />
    </Tooltip>
  );
};
const Sanchi = ({
  tags, 
}) => {
  const titles = {
    tainm: '様態', 
    ikunm: '育成', 
    gennm: '原産地', 
    kaknm: '加工地', 
  };
  return (
    <React.Fragment>
      {Object.entries(titles).map(([key, title], i) => (
        <Tooltip key={i} title={title}>
          <Chip label={tags[key] || '-'} size="small" />
        </Tooltip>
      ))}
    </React.Fragment>
  );
};
const Hincd = ({
  children, 
}) => {
  return (
    <Tooltip title="品種コード">
      <Chip component="span" label={children} size="small" variant="outlined"/>
    </Tooltip>
  );
};
const Kura = ({
  code, 
  children, 
}) => {
  return (
    <Tooltip title={`倉コード：${code}`}>
      <Chip component="span" label={children} size="small" />
    </Tooltip>
  );
};
const Ymd = ({
  ymd: {
    nkymd, 
    upymd, 
  }, 
}) => {
  return (
    <React.Fragment>
      <Typography component="span" variant="body2">
        {nkymd}入庫
      </Typography>
      {' | '}
      <Typography component="span" variant="body2">
        {upymd}最終
      </Typography>
    </React.Fragment>
  );
};
