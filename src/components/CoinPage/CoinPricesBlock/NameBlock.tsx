import { Box } from '@mui/system';
import { Avatar, Typography } from '@mui/material';
import * as otherFuncs from '../../../services/otherFuncs';
import { useEffect, useState } from 'react';
import { getCoinInfo } from '../../../services/coinDbApi';

import { NameBlockProps } from '../../../types';

export const NameBlock = ({ coin, coinCode }: NameBlockProps) => {
  // const showDate = (date: number) => {
  //   console.log(moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a'));
  // };

  // if (coin) {
  //   showDate(coin.history[50].date);
  // }

  const { cap, volume, rate, allTimeHighUSD, png64, name } = coin;

  const coinPrice = rate.toFixed(2);

  const volumePercent = ((volume / cap) * 100).toFixed(2);

  const volumeList = [
    {
      name: 'MARKET CAP',
      value: otherFuncs.formatToMillion(cap),
    },
    {
      name: 'VOLUME',
      value: otherFuncs.formatToMillion(volume),
    },
    {
      name: 'VOL/MCAP',
      value: `${volumePercent}%`,
    },
    {
      name: 'ALL TIME HIGH',
      value: `$${allTimeHighUSD.toFixed(2)}`,
    },
  ];
  return (
    <Box borderBottom={'1px solid #1d2330'} pb={2}>
      <Box display="flex">
        <Box display="flex" alignItems="center">
          <Avatar src={png64} alt={coin.name} sx={{ width: 48, height: 48 }} />
          <Box ml={2} mr={3}>
            <Typography component="h2" fontSize={28}>
              {name}
            </Typography>
            <Typography color={'primary.textColor'} fontSize={14} margin="0 auto">
              {coinCode}
            </Typography>
          </Box>
        </Box>
        <Box ml={3}>
          <Typography fontSize={28}>{`$${coinPrice}`}</Typography>
          <Typography fontSize={14} margin="0 auto">
            {}
          </Typography>
        </Box>
      </Box>

      <Box component="ul" display={'flex'} pt={2} ml={-2} mr={-2}>
        {volumeList.map(item => {
          return (
            <Box key={item.name} component="li" pr={2} pl={2}>
              <Typography color={'primary.textColor'} fontSize={13}>
                {item.name}
              </Typography>
              <Typography fontSize={18}>{item.value}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
