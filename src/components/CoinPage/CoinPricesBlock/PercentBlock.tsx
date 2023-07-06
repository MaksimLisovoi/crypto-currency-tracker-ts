import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { TimePercent } from './TimePercent';
import { deltaList } from '../../../types';

export const PercentBlock = ({ coin }: any) => {
  const {
    delta: { day, hour, week, month, quarter, year },
  } = coin;

  // { name: string; value: number }[];

  const deltaList: deltaList[] = [
    {
      name: '1H USD',
      value: hour,
    },
    {
      name: '24H USD',
      value: day,
    },
    {
      name: '7D USD',
      value: week,
    },
    {
      name: '30D USD',
      value: month,
    },
    {
      name: '90D USD',
      value: quarter,
    },
    {
      name: '1Y USD',
      value: year,
    },
  ];
  return (
    <Box component="ul" display={'flex'} flexWrap={'wrap'} pt={2} ml={-2} mr={-2} mt={-1} mb={-1}>
      {deltaList.map(item => {
        return (
          <Box key={item.name} component="li" pr={2} pl={2} pb={1} pt={1}>
            <Typography color={'primary.textColor'} fontSize={13}>
              {item.name}
            </Typography>
            <TimePercent value={item.value} />
          </Box>
        );
      })}
    </Box>
  );
};
