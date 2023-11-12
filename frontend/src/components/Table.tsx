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

const rows: Row[] = [
  createData('Company A', 75, 80, 90),
  createData('Company B', 85, 70, 80),
  createData('Company C', 90, 85, 75),
  // Add more rows as needed
];

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function CompanyScoreTable() {
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
