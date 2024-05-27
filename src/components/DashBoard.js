import React, { useRef, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import '../style/dashboard.css'; // Import the CSS for animations

const rows = [
  { id: 1, name: 'Based on premium and', cratio: '2.02', oprofit: '194096.05', avgdprofit: '158.45', winpday: '0.62', price: '', action: 'View' },
  { id: 2, name: 'strategy_name', cratio: '1.98', oprofit: '171862.74', avgdprofit: '138.26', winpday: '0.6', price: '500', action: 'Buy' },
  { id: 3, name: 'strategy_name', cratio: '1.75', oprofit: '264090.37', avgdprofit: '216.11', winpday: '0.64', price: '', action: 'View' },
  { id: 4, name: 'strategy_name', cratio: '1.65', oprofit: '264089.37', avgdprofit: '214.11', winpday: '0.63', price: '', action: 'View' },
  { id: 5, name: 'Wait and trade_Save', cratio: '1.62', oprofit: '124537.84', avgdprofit: '113.11', winpday: '0.61', price: '', action: 'View' },
  { id: 6, name: 'Based on premium wit', cratio: '1.55', oprofit: '99916.32', avgdprofit: '136.5', winpday: '0.48', price: '', action: 'View' },
  { id: 7, name: 'Selling with re entr', cratio: '1.38', oprofit: '254470.35', avgdprofit: '212.95', winpday: '0.63', price: '', action: 'View' },
  { id: 8, name: 'iron condor', cratio: '1.31', oprofit: '132699.25', avgdprofit: '103.43', winpday: '0.63', price: '', action: 'View' },
  { id: 9, name: 'strategy_name', cratio: '1.12', oprofit: '136226.09', avgdprofit: '111.11', winpday: '0.58', price: '', action: 'View' },
  { id: 10, name: 'strategy_name', cratio: '1.11', oprofit: '260759.53', avgdprofit: '175.71', winpday: '0.35', price: '', action: 'View' },
];

export default function DashBoard() {
  const nodeRef = useRef(null);

  return (
    <div className="Container">
      <div className="topcontent">
        <p>Basic Backtest</p>
        <div className="Slippage">
          <span>Slippage</span>
          <Box sx={{ minWidth: 60 }}>
            <FormControl fullWidth>
              <NativeSelect
                defaultValue={0.5}
                inputProps={{
                  name: 'Slippage',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={0}>0%</option>
                <option value={0.5}>0.5%</option>
                <option value={1}>1%</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="tablehead">
            <TableRow>
              <TableCell><span className="table-head"> Rank </span></TableCell>
              <TableCell><span className="table-head"> Name </span></TableCell>
              <TableCell><span className="table-head"> Calmar Ratio </span></TableCell>
              <TableCell><span className="table-head"> Overall Profit </span></TableCell>
              <TableCell><span className="table-head"> Avg. Daily Profit </span></TableCell>
              <TableCell><span className="table-head"> Win %(Day) </span></TableCell>
              <TableCell><span className="table-head"> Price (Rs) </span></TableCell>
              <TableCell><span className="table-head"> Action </span></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TransitionGroup component={null}>
              {rows.map((row) => (
                <CSSTransition nodeRef={nodeRef} key={row.id} timeout={500} classNames="fade">
                  <TableRow className='tablebody'>
                    <TableCell><Box className="rank">{row.id}</Box></TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        {row.name}</Box>
                    </TableCell>
                    <TableCell><TrendingUpOutlinedIcon className="growgraph" /> {row.cratio}</TableCell>
                    <TableCell>{row.oprofit}</TableCell>
                    <TableCell>{row.avgdprofit}</TableCell>
                    <TableCell>{row.winpday}</TableCell>
                    <TableCell>{row.price ? row.price : '-'}</TableCell>
                    <TableCell>
                      <button className="action-button">
                        {row.action}
                      </button>
                    </TableCell>
                  </TableRow>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
