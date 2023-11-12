import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/Table.css';
import { letterSpacing } from '@mui/system';

interface Payload {
  payload: any
}

interface Row {
  name: string;
  environmentalScore: number;
  socialScore: number;
  governanceScore: number;
}

function createData(
  name: string,
  environmentalScore: number,
  socialScore: number,
  governanceScore: number,
): Row {
  return { name, environmentalScore, socialScore, governanceScore };
}



const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function CompanyScoreTable({payload}:Payload) {
 

  const rows: Row[] = []
  for(let i = 0; i < payload.stock_scores.length; i++ ){
    const stocks = payload.stock_scores[i];
    rows.push(createData(stocks.ticker,Math.round(stocks.e_score),Math.round(stocks.s_score),Math.round(stocks.g_score)));

  }

  console.log(rows)
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="company score table">
          <TableHead>
            <TableRow>
              <TableCell className="headings">Company Name</TableCell>
              <TableCell align="right" className="headings">Environmental Score</TableCell>
              <TableCell align="right" className="headings">Social Score</TableCell>
              <TableCell align="right" className="headings">Governance Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  textAlign: 'center', // Center the content
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.environmentalScore}</TableCell>
                <TableCell align="right">{row.socialScore}</TableCell>
                <TableCell align="right">{row.governanceScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
